/* tidslinjen. Brynjar */
import React from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import MyFooter from "../components/footer"


// dette er nå komponentene som er spesifikke for tidslinje
import { HeleLinjen } from "../components/tidslinjeComp/heleLinjen"  
import { AlleFaktabokser } from "../components/tidslinjeComp/faktabokser"
import { tidslinjePixelHoyde, startDate} from "../components/tidslinjeComp/totalEmission"
import { Datovelger/*, startDato*/ } from "../components/tidslinjeComp/datovelger"
import { formatDate } from "../components/tidslinjeComp/tidslinjeData/randomDateKG"

import "../styles/tidslinje.css"


// her er selve funksjonen som kjører komponentene ut på skjermen
export default function Home() {
  return ( 
    <div id="hovedkontainer" className="div__hovedStyle">
      <Header headerText="tidslinje"/> 
      <div id="startsdato"> Startdato nå: {formatDate(new Date(startDate))} (men den blir dessverre ikke oppdatert i tidslinjen, det kommer snart)</div>
      <div id="tidslinjeinfo"><Datovelger id="dato1"/></div>
      <div id="tidslinjen" style={tidslinjenStyle}>
          <HeleLinjen />
          <AlleFaktabokser />
      </div>
      <MyFooter />
    </div>
  )
}

const tidslinjenStyle = { // styles her fordi den endrer seg utfra antall element
  height: tidslinjePixelHoyde, 
  position: "relative"
}
