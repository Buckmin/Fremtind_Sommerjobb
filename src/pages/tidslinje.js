/* tidslinjen. Brynjar */
import React, { useState } from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import Footer from "../components/footer"


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
  const [selectedDate, setSelectedDate] = useState (new Date("2020-04-01"))
  const userEmissions = EmissionsPerDay() // hentet fra emissions.js, 2D array [[dato, kg], ...]. Alle utslipp til brukeren
console.log("tidslinje")
  const userEmissionsSliced = sliceOnGivenIndexItemIn2dArr(userEmissions, selectedDate) // array med emissions fra og med valgt startsdato
  let totalEmission = sumOfEmissionsInArray(userEmissionsSliced) // dette er nå summen av utslipp fra arrayet i emissions.js
  return ( 
    <div id="hovedkontainer" className="div__hovedStyle">
      <Header headerText="tidslinje"/> 
      <div id="startsdato"> Startdato nå: {formatDate(new Date(selectedDate))}</div>
      <div id="tidslinjeinfo"><Datovelger id="dato1" selectedDate={selectedDate} onChange={date => setSelectedDate(date)} /></div>
      <div id="tidslinjen" >
          <HeleLinjen totalEmission={totalEmission} />
          <AlleFaktabokser totalEmission={totalEmission} selectedDate={selectedDate} userEmissionsSliced={userEmissionsSliced}/>
      </div>
      <Footer />
    </div>
  )
}

// nytt i denne filen nå er disse som ser slik ut: "totalEmission={totalEmission}"
// det er for å sende nye verdier nedover i systemet
// er visst det som er greia med react, måten det skjer og det da blir rendret mange nye element i hele kjeden