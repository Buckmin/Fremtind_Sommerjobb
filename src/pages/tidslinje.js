/* tidslinjen. Brynjar */
import React, { useState } from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import MyFooter from "../components/footer"


// dette er nå komponentene som er spesifikke for tidslinje
import { HeleLinjen } from "../components/tidslinjeComp/heleLinjen"  
import { AlleFaktabokser } from "../components/tidslinjeComp/faktabokser"
import { sliceOnGivenIndexItemIn2dArr, sumOfEmissionsInArray} from "../components/tidslinjeComp/totalEmission"
import { Datovelger } from "../components/tidslinjeComp/datovelger"
import { formatDate } from "../components/tidslinjeComp/tidslinjeData/randomDateKG"
import { EmissionsPerDay } from "../components/tidslinjeComp/tidslinjeData/emissions"

import "../styles/tidslinje.css"


// her er selve funksjonen som kjører komponentene ut på skjermen
export default function Home() {
  const [selectedDate, setSelectedDate] = useState (new Date("2020-02-27"))
  const userEmissions = EmissionsPerDay() // hentet fra emissions.js, 2D array [[dato, kg], ...]. Alle utslipp til brukeren
  const userEmissionsSliced = sliceOnGivenIndexItemIn2dArr(userEmissions, selectedDate) // array med emissions fra og med valgt startsdato
  //console.log(userEmissionsSliced)
  let totalEmission = sumOfEmissionsInArray(userEmissionsSliced) // dette er nå summen av utslipp fra arrayet i emissions.js
  return ( 
    <div id="hovedkontainer" className="div__hovedStyle">
      <Header headerText="tidslinje"/> 
      <div id="startsdato"> Startdato nå: {formatDate(new Date(selectedDate))} (men den blir dessverre ikke oppdatert i tidslinjen, det kommer snart)</div>
      <div id="tidslinjeinfo"><Datovelger id="dato1" selectedDate={selectedDate} onChange={date => setSelectedDate(date)} /></div>
      <div id="tidslinjen" style={tidslinjenStyle}>
          <HeleLinjen totalEmission={totalEmission} />
          <AlleFaktabokser totalEmission={totalEmission} selectedDate={selectedDate} userEmissionsSliced={userEmissionsSliced}/>
      </div>
      <MyFooter />
    </div>
  )
}

const tidslinjenStyle = { // styles her fordi den endrer seg utfra antall element
  //height: tidslinjePixelHoyde, 
  //position: "relative"
}
