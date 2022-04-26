import React from 'react'
import useGeoLocation from '../hooks/useGeoLocation'

const Navigate = () => {
    // const [location, setLocation] = useState({ coordinates: { lat: "" , lng:"" }})
    
    const location = useGeoLocation()
        
    return (
        <>
        <div>Navigate</div>
            <button>   
                Get Location
            </button>
            Latitude: {location.coordinates.lat}
            Longitude:  {location.coordinates.lng}
        </>
    )
}

export default Navigate