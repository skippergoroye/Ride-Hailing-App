import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';

export interface TripAttributes{
    tripID:string;
    sourceLocation: string;
    destinationLocation: string;
    lat:string,
    lon:string,
    price: string;
    status: string;
    payment:string;
    userID:string;
    driverID:string;
    tripDuration: string;
    estimatedTime: string;
    startTime: string,
    endTime: string,
}

export class TripInstance extends Model<TripAttributes>{}

TripInstance.init({
    tripID:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    sourceLocation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    destinationLocation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    payment:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    userID:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    driverID:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    tripDuration: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estimatedTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lon: {
        type: DataTypes.STRING,
        allowNull: false,
    }


}, {
    sequelize: db,
    tableName: 'trip'
})
