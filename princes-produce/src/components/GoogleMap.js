import React from 'react'
import GoogleMapReact from 'google-map-react'

import  "./css/GoogleMap.css"
 
function GoogleMap(props){

    const API_KEY = "AIzaSyC1oxrU2XBdik9P_XFy8OphC9Yp4Sgg9ig";
    const Location = {
        address: props.address,
        lat: props.lat,
        long: props.long

    };

    return (
        <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: `${API_KEY}` }}
            defaultCenter={Location}
            defaultZoom={props.zoomLevel}
        >

        </GoogleMapReact>
        </div>
    );
}

export default GoogleMap;

/*
<LocationPin
lat={Location.lat}
lng={Location.lng}
text={Location.address}
/>
*/