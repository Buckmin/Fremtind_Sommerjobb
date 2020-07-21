import React, { useState, useEffect } from "react"

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

// FJERNES: import 'bootstrap/dist/css/bootstrap.min.css' // styling på alle bootstrap-greier. Uten denne blir de kjedelige/borte fra skjermen


import { ToggleButtonsPeriodeDUMÅ, ToggleButtonsPeriodeDUM  } from "../components/tidsperiodeknapper"
import { ToggleButtonsFremkomstmiddel } from "../components/fremkomsmiddelknapper"
import { ToggleButtonsSorterEtter } from "../components/sorterEtterKnapper"
import { initalLoadOfData } from "./dev"
import { emissionsBetweenDays } from "../components/tidslinjeComp/tidslinjeData/emissions"



export default function Home() {
  initalLoadOfData() // denne funksjonen oppretter lagret (per nå tilfeldig) data i localStorage

  // let emissionsDict = JSON.parse(localStorage.getItem("emissionsPerDay")) // bruker ikke denne?


  // let personlia =  JSON.parse(localStorage.getItem("personlia"))
  // let userGoals =  JSON.parse(localStorage.getItem("userGoals"))

  // dette er visst måten å gjøre det på for å få siden til å faktisk builde
  let [userGoals, setUserGoals] = useState("undefined")
  useEffect(() => {
    setUserGoals(JSON.parse(localStorage.getItem("userGoals")))
  }, [])



  let userGoalTotCO2 = userGoals["totalGoal"] // denne må komme fra en annen side eller noe sånt
  //let totalEmission = emissionsBetweenDays(personlia["initialDate"], formatDate(new Date())) // denne må regnes ut eller hentes ut fra et annet sted
  let totalEmission = emissionsBetweenDays(new Date("2020-01-01"), new Date()) // denne må regnes ut eller hentes ut fra et annet sted
  
  const [periodeDUMÅ, setRadioValuePeriodeDUMÅ] = useState('Dag'); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  const [periodeDUM, setRadioValuePeriodeDUM] = useState('Dag'); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  const [middel, setRadioValueMiddel] = useState('Gå') // en del av fremkomstmiddelknapper
  const [sortering, setRadioValueSortering] = useState('Nylig') // en del av fremkomstmiddelknapper


  // if (userGoals === "undefined"){
  //   return null
  // }

  return ( 
    <div id="hovedkontainer" className="div__hovedStyle" >
      <Header headerText="headeren vår"/> 
      <div>Hello world!</div>

      <ToggleButtonsSorterEtter sortering={sortering} onChange={(e) => setRadioValueSortering(e.currentTarget.value)}/>
      <h5>Fremkomstmiddel valgt: {sortering} </h5>

      <ToggleButtonsFremkomstmiddel middel={middel} onChange={(e) => setRadioValueMiddel(e.currentTarget.value)}/>
      <h5>Fremkomstmiddel valgt: {middel} </h5>

      <ToggleButtonsPeriodeDUMÅ periodeDUMÅ={periodeDUMÅ} onChange={(e) => setRadioValuePeriodeDUMÅ(e.currentTarget.value)} /> {/* husk useState variabel og funksjon! */}
      <h5>periode valgt: {periodeDUMÅ}</h5>

      <ToggleButtonsPeriodeDUM periodeDUM={periodeDUM} onChange={(e) => setRadioValuePeriodeDUM(e.currentTarget.value)} /> {/* husk useState variabel og funksjon! */}
      <h5>periode valgt: {periodeDUM}</h5>

      <HjuletTotalCO2 totalEmission={totalEmission} userGoalTotCO2={userGoalTotCO2}/> 

      <TravelProgressBarsKG />
      
      <LoremIpsum />

      <TravelProgressBarsPercentage />
      
      <Footer />
    </div>
  )
}
