import React from "react"


// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import LoremIpsum from "../components/testtext"
import Footer from "../components/footer"

// ER: fremtind-fonter -> trengs kun å importeres en gang i prosjektet
// hvis vi ikke får jøkul-komponenter til å fungere har vi i det minste fontene som gir preg av Fremtind
import  "../styles/webfonts.css"


import { TravelProgressBarsKG, TravelProgressBarsPercentage } from "../components/statistics/progressBars"
import { HjuletTotalCO2 } from "../components/statistics/hjulet"
// importen av ...Bars... gir progresjonsbarene. kall de inn som komponenter 

import 'bootstrap/dist/css/bootstrap.min.css' // styling på alle bootstrap-greier. Uten denne blir de kjedelige/borte fra skjermen


export default function Home() {
  let userGoalTotCO2 = 100 // denne må komme fra en annen side eller noe sånt
  let totalEmission = 71.1 // denne må regnes ut eller hentes ut fra et annet sted
  return ( 
    <div id="hovedkontainer" className="div__hovedStyle" >
      <Header headerText="headeren vår"/> 
      <div>Hello world!</div>

      <HjuletTotalCO2 totalEmission={totalEmission} userGoalTotCO2={userGoalTotCO2}/> 

      <TravelProgressBarsKG />
      
      <LoremIpsum />

      <TravelProgressBarsPercentage />
      
      <Footer />
    </div>
  )
}
