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
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
  )
}

export default MapContainer;