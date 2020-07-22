import React, {useState} from "react"

import Header from "../components/header"
import Footer from "../components/Footer"


import GoogleMaps from "../components/routes/Autocomplete"
import FindTrips from "../components/routes/FindTrips"

//LoadScriptNext virket med en gang, men gir også en error på at vi inkluderer Google Maps Javascript API flere ganger
//import {LoadScript} from '@react-google-maps/api';
import {LoadScriptNext} from '@react-google-maps/api';

import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";


export default function Reiseplanlegger() {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const [showResults, setShowResults] = React.useState(false)
/* 
    const submitLocation = () => {
        setOrigin(origin),
        setDestination(destination)
    }
 */

    //{console.log('origin', origin)}
    //{console.log('destination', destination)}

    console.log('origin', origin)
    console.log('destination', destination)

    const TripResults = () => (
        <div id="nontransit-results">
            <br/><br/>
            <LoadScriptNext googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'>
                <FindTrips
                    origin={origin.place_id}
                    destination={destination.place_id}
                />
            </LoadScriptNext>
        </div>
    )


    return ( 
      <div id="hovedkontainer" style={hovedStyle}>
        <Header headerText="Reiseplanlegger"/>
        <div>
            <GoogleMaps placeholder="Avreisested" onChange={ o => setOrigin(o)}/>
            <GoogleMaps placeholder="Destinasjon" onChange={ d => setDestination(d)}/>

            <PrimaryButton onClick={() => setShowResults(true)}>Neste</PrimaryButton>
            
            {/* Linjen under gjør at TripResults vises kun etter man har trykket på neste */}
            { showResults ? <TripResults /> : null }

        </div>
        <Footer page="/reiseplanlegger"/>
      </div>
    )
  }

  
  const hovedStyle = {
    margin: "0 auto"
  };
  