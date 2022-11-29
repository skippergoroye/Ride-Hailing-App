import express, {Request, Response, NextFunction} from 'express'
import { TripAttributes, TripInstance } from '../model/trips';
import { GenerateSignature, geocoder, getPrice, randomNumber } from '../utils.ts/utils';
import { v4 as uuidV4 } from 'uuid'
import { JwtPayload } from 'jsonwebtoken';
import { UserInstance } from '../model/userModel';
import { DriverAttributes, DriverInstance } from '../model/driverModel';


export const bookRide = async (req: JwtPayload, res: Response, next: NextFunction) => {
    try{
        const {sourceLocation, destinationLocation, estimatedTime} = req.body

        const location = await geocoder.geocode(destinationLocation);
        const {latitude, longitude} = location[0];
        
        const id = uuidV4()
        const userID = req.User.id
      
        const price = getPrice(estimatedTime)


        const User = await UserInstance.findOne({where:{id:userID}})
        if(User){
            const Trip = await TripInstance.findOne({where:{destinationLocation:destinationLocation}})
            if(!Trip){
                const trip = await TripInstance.create({
                    tripID:id,
                    sourceLocation,
                    destinationLocation,
                    price: `${price}`,
                    status: 'pending',
                    payment: '',
                    userID,
                    driverID:'',
                    tripDuration: '',
                    estimatedTime,
                    startTime: '',
                    endTime: '',
                    lat: latitude,
                    lon: longitude,
                }) as unknown as TripAttributes

                return res.status(200).json({
                    message: "Looking For available Drivers",
                    lat: trip.lat,
                    lon: trip.lon,
                    price: trip.price,})
            }
            
            return res.status(400).json({
                message:"Trip Already Exists",
            })
            
        }

        return res.status(400).json({
            message:"Unauthorised User, Kindly Log In",
        })
    
           

    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/book-ride",
            err
        })
    }
}

export const showRide = async (req: JwtPayload, res: Response, next: NextFunction) => {
    try{
       const driver = await DriverInstance.findAll()
       const index = randomNumber(driver)

       const rideDriver = driver[index] as unknown as DriverAttributes
      
       
       const id = req.User.id
       console.log(id)
        const trip = await TripInstance.findOne({where:{userID:id}}) as unknown as TripAttributes
        if(trip){
            const updatedTrip = await TripInstance.update({
                driverID: rideDriver.id,
            },{where:{userID:id}})

            return res.status(200).json({
                message: "Driver Found",
                  name: rideDriver.fullName,
                  vehicle: rideDriver.typeOfCar,
                plateNumber: rideDriver.plateNumber,
                price: trip.price
            })
        }

        return res.status(400).json({
            message: "Driver Not Available",
        })

        


    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/show-ride",
            err
        })
    }
}

export const acceptRide = async (req: JwtPayload, res: Response, next: NextFunction) => {
    try{

        const id = req.User.id

        const Trip = await TripInstance.findOne({where:{userID:id}}) as unknown as TripAttributes

        if(Trip){
            const trip = await TripInstance.update({
                status: 'ongoing',
                startTime: `${new Date().getTime()}`
            }, {where:{userID:id}}) as unknown as TripAttributes

            return res.status(200).json({
                message: "Ride Accepted",
                Trip,})
        }

        return res.status(400).json({
            message:"Trip Does Not Exist",
        })

    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/accept-ride",
            err
        })
    }
}

export const endRide = async (req: JwtPayload, res: Response, next: NextFunction) => {
    try{

        const id = req.User.id

        const Trip = await TripInstance.findOne({where:{userID:id}}) as unknown as TripAttributes

        if(Trip){
            const trip = await TripInstance.update({
                status: 'completed',
                endTime: `${new Date().getTime()}`
            }, {where:{userID:id}}) as unknown as TripAttributes

            return res.status(200).json({
                message: "Ride Ended",
                Trip,})
        }

        return res.status(400).json({
            message:"Trip Does Not Exist",
        })

    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/end-ride",
            err
        })
    }
}
