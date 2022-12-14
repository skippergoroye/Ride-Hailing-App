
import { useEffect, useRef, useState } from "react";
import {GoogleMap, DirectionsRenderer, MarkerF, Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
//   import useOnclickOutside from "react-cool-onclickoutside";
import {

	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axiosPost from "./axiosJob";
import Sidebar from "../components/Sidebar";
import RideAccepted, { toggleModal } from "./RideAccepted";

export default function Test(){

    return (<>
        <Sidebar />

    </> )
}

export function Map(props){
    const [selected, setSelected] = useState(null)
    const [notSelected, notSetSelected] = useState(true)
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const usersPosRef = useRef();
    const destinationRef = useRef();

    async function calcRoute(origin, destination){
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: origin,
            destination: {lat:destination.lat, lng:destination.lng},
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING
        })
    
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.value)
        setDuration(results.routes[0].legs[0].duration.value)
        // axios.post(url, {usersPos:origin, destination:{lat:destination.lat, lng:destination.lng}, duration, distance})
    } 

    const PlacesAutoComplete = ({setSelected})=>{
        const {
            ready,
            value,
            setValue,
            suggestions:{status, data},
            clearSuggestions
        } = usePlacesAutocomplete()
    
    
        
    
        const handleSelect = async (address) => {
            setDirectionsResponse(null)
            setValue(address, false);
            clearSuggestions();
            const results = await getGeocode({address})
            const {lat, lng} = await getLatLng(results[0])
            // axiosPost('', {lat, lng})
            setSelected(JSON.parse(JSON.stringify({lat, lng})));
            calcRoute(props.usersPosition, {lat:lat, lng:lng} );
            
        };
    
        return <Combobox onSelect={handleSelect}>
                    <ComboboxInput 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    disabled={!ready} 
                    className="combobox-input" 
                    placeholder="Enter your destination" 
                    />

                    <ComboboxPopover>
                        <ComboboxList>
                            {status === "OK" && data.map(({place_id, description}) => (
                                <ComboboxOption key={place_id} value={description} />
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
    }

    //I will send this information to the backend which can then be used to populate the database and also inform the driver of the users location and destination.
    // function postDest () {
    //     axiosPost("http://localhost/3001/travel", {location:props.usersPosition, destination:props.destinationPosition})
    // }

    // useEffect(() => {
    //     if(GoogleMap) {

    //     }
    // })
    return (
    <>
        <div className="places-container">
        <button className="order-ride" onClick={toggleModal} type="button" >Order Ride!</button>
        <PlacesAutoComplete setSelected={setSelected} />
        <RideAccepted distance={distance} duration={duration} />
        </div>
        <GoogleMap 
        zoom={15} 
        center={JSON.parse(JSON.stringify(props.usersPosition))} 
        mapContainerClassName="map" 
        ref={map => map}
        options={{
            streetViewControl: false,
            mapTypeControl:false,
            fullscreenControl:false
        }}
        onLoad={map => setMap(map)}
        >

            <MarkerF position={JSON.parse(JSON.stringify(props.usersPosition))} icon={{
                url: "http://maps.google.com/mapfiles/kml/pal4/icon45.png",
                scale:  0.2
            }}/>
            

            {selected && <Marker position={selected} icon={{
                url: "http://maps.google.com/mapfiles/kml/pal2/icon13.png",
                scale: 2,
                
            }}/>
            }

            { directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}

        </GoogleMap>
    </>
  )
}
