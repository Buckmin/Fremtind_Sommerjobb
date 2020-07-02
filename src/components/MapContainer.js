import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

  const mapStyles = {        
    height: "400px",
    width: "100%"};

  const defaultCenter = {
    lat: 59.911342, lng: 10.753525
    //default rundt Oslo-området inntil videre
  }

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;