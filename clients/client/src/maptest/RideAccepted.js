import React from 'react';

export default function RideAccepted (props){

    return <>
        <div className="background" >
        <div className='modal-content'>
            <p className='driverName'>Driver's name: Bayo Lance</p>
            <p className='carType'>Car type: Toyota</p>
            <p className='carNumber'>Plate number: 539-37-AP</p>
            <p className='duration'>Estimated time: {Math.floor(props.duration/60)} minutes</p>
            <p className='amount'>Estimated amount: NGN {Math.floor(props.duration/60 * 50)}</p>
            <p className='distance'>Distance: {Math.round(props.distance/1000)} Km</p>
            <button className='ridebutton' onclick={fetchDriver}>Accept</button>
            <button className='ridebutton' onClick={toggleModal}>Cancel</button>
        </div>
        </div>
    </>
}

export function toggleModal (){
    document.body.classList.toggle("open")
}

export function fetchDriver(){
    // axios.post(url, {})
}