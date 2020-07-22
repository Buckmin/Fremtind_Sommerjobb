import React, {useState, useEffect} from "react"

import Header from "../components/header"
import Footer from "../components/Footer"


import GoogleMaps from "../components/routes/Autocomplete"

import FindTransitTrips from "../components/routes/FindTransitTrips"
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
    

/*     useEffect( () => {
        const convertInput = async () => {
            const originFeatures = await service.getFeatures(origin.structured_formatting.main_text)
            const destFeatures = await service.getFeatures(destination.structured_formatting.main_text)
    }

    }, []) */


    return ( 
      <div id="hovedkontainer" style={hovedStyle}>
        <Header headerText="Reiseplanlegger"/>
        <div>
            <GoogleMaps placeholder="Avreisested" onChange={ o => setOrigin(o)}/>
            <GoogleMaps placeholder="Destinasjon" onChange={ d => setDestination(d)}/>

            <PrimaryButton onClick={() => setShowResults(true)}>Neste</PrimaryButton>
            
            { showResults ? <TripResults /> : null }

            {/* Etter dette skal informasjon om reisen lastes inn -> må lagre origin og destination */}
            {/* Skal kunne tas inn som props i FindTransitTrips */}

        </div>
        <Footer />
      </div>
    )
  }

  
  const hovedStyle = {
    margin: "0 auto"
  };
  