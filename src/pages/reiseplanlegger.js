import React, {useState} from "react"

import Header from "../components/header"
import Footer from "../components/footer"


import GoogleMaps from "../components/reiseplanlegger/Autocomplete"
import FindTrips from "../components/reiseplanlegger/FindTrips"

//LoadScriptNext virket med en gang, men gir også en error på at vi inkluderer Google Maps Javascript API flere ganger
//import {LoadScript} from '@react-google-maps/api';
import {LoadScriptNext} from '@react-google-maps/api';

import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";

import { getJson } from "../getJson";



export default function Reiseplanlegger() {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    let carInfo = getJson("carInfo") || {};


    //temperatur er statisk inntil videre
    let temp = 19

    let fuel = carInfo["fuel"]
    let consum = carInfo["fuelconsum"] //litt misvisende navngivning her med fuel/consum/fuelconsum, se over senere?


    //disse blir generert ut i fra variablene over som må hentes inn via noe lagring
    let fuelConsum = findFuelConsum(fuel, consum)
    let tempFactor = findTempFactor(temp)


    const [showResults, setShowResults] = React.useState(false)

    // console.log('origin', origin)
    // console.log('destination', destination)

    // INPUT fuelConsum = forbruk [L/mil], fuel = drivstofftype (BENSIN, DIESEL, EL)
    // OUTPUT Utslipp pr passasjer [g/pkm]
    // consum * abc
    function findFuelConsum (fuel, consum) {
        if (fuel === "Bensin") {
            return (consum * 2.32 * 100 / 1.7)
        }
        else if (fuel === "Diesel") {
            return (consum * 2.66 * 100 / 1.7)
        }
        else if (fuel === "El") {
            return (0)
        }
    }


    // INPUT temp = temperatur [deg C]
    // OUTPUT Faktor knyttet til ekstra/mindre CO2-utslipp
    function findTempFactor(temp) {
        if (temp <= 0) {
            return (1.095)
        }
        else if (temp >= 23) {
            return (0.975)
        }
        else {
            return 1
        }
    }


    const TripResults = () => (
        <div id="nontransit-results">
            <br/><br/>
            <LoadScriptNext googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'>
                <FindTrips
                    origin={origin.place_id}
                    destination={destination.place_id}
                    originText={origin.structured_formatting.main_text}
                    destinationText={destination.structured_formatting.main_text}
                    fuelConsum={fuelConsum}
                    tempFactor={tempFactor}
                />
            </LoadScriptNext>
        </div>
    )


    return ( 
      <div id="hovedkontainer" style={hovedStyle}>
        <Header headerText="Reiseplanlegger"/>
        <div>
            <GoogleMaps id="originInput" placeholder="Avreisested" onChange={ o => {setOrigin(o); setShowResults(false)}}/>
            <GoogleMaps id="destinationInput" placeholder="Destinasjon" onChange={ d => {setDestination(d); setShowResults(false)}}/>

            <PrimaryButton onClick={() => setShowResults(true)}>Beregn</PrimaryButton>
            
            {/* Linjen under gjør at TripResults vises kun etter man har trykket på Beregn */}
            {/* Gjør også at dersom adressen endres eller fjernes får man ikke feilmelding, fjerner beregning og kart */}
            { showResults ? <TripResults /> : null }

        </div>
        <Footer page="/reiseplanlegger"/>
      </div>
    )
  }

  
  const hovedStyle = {
    margin: "0 auto"
  };
  