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


    //legg inn riktig drivstoff (og forbruk?) fra lagret bil her, vet ikke om vi skal bry oss om temperatur
    //kan også si at forbruket er statisk, men tipper det vil variere ut i fra biltype
    let fuel = "PETROL"
    let temp = 19
    let consum = 0.67

    //disse blir generert ut i fra variablene over som må hentes inn via noe lagring
    let fuelConsum = findFuelConsum(fuel, consum)
    let tempFactor = findTempFactor(temp)


    const [showResults, setShowResults] = React.useState(false)

    console.log('origin', origin)
    console.log('destination', destination)

    // INPUT fuelConsum = forbruk [L/mil], fuel = drivstofftype (BENSIN, DIESEL, EL)
    // OUTPUT Utslipp pr passasjer [g/pkm]
    function findFuelConsum (fuel, consum) {
        if (fuel === "PETROL") {
            console.log('fuelconsum: ', (consum * 2.32 * 100 / 1.7))
            return (consum * 2.32 * 100 / 1.7)
        }
        else if (fuel === "DIESEL") {
            return (consum * 2.66 * 100 / 1.7)
        }
        else if (fuel === "EL") {
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
            <GoogleMaps placeholder="Avreisested" onChange={ o => {setOrigin(o); setShowResults(false)}}/>
            <GoogleMaps placeholder="Destinasjon" onChange={ d => {setDestination(d); setShowResults(false)}}/>

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
  