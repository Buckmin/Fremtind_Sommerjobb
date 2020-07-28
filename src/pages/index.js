// import React, { useState } from "react";
import React from "react";


// under her importerer vi alle kompontentene vi lager
import Header from "../components/header";
import Footer from "../components/footer";

// ER: fremtind-fonter -> trengs kun å importeres en gang i prosjektet
// hvis vi ikke får jøkul-komponenter til å fungere har vi i det minste fontene som gir preg av Fremtind
import "../styles/webfonts.css";

// import { TravelProgressBarsKG, TravelProgressBarsPercentage } from "../components/statistics/progressBars";
// import { HjuletTotalCO2 } from "../components/statistics/hjulet";
// // importen av ...Bars... gir progresjonsbarene. kall de inn som komponenter

// import { ToggleButtonsPeriodeDUMÅ, ToggleButtonsPeriodeDUM, ToggleButtonsPeriodeDUMÅT } from "../components/tidsperiodeknapper";
// import { ToggleButtonsFremkomstmiddel } from "../components/fremkomsmiddelknapper";
// import { ToggleButtonsSorterEtter } from "../components/sorterEtterKnapper";
// import { emissionsBetweenDaysLS } from "../components/tidslinjeComp/tidslinjeData/emissions";

import { initalLoadOfDataLS } from "./dev";
import { getJson } from "../getJson";
import { BsPencil } from "react-icons/bs";
import { Link } from "gatsby";
// import { CowIkon, FremtindLogoIkon } from "../components/customIkoner";
import { DashboardUtenUserGoal, DashboardMedUserGoalLS } from "../components/dashboardComp";
import { ManyFunfactCards } from "../components/statistics/funfactCards";
import { VisualizedTotalStatsLS } from "../components/statistics/totalStatsVisualized";



export default function HomeLS() { 
  initalLoadOfDataLS(); // denne funksjonen oppretter lagret (per nå tilfeldig) data i localStorage

  

  let personlia = getJson("personlia") || {};
  let userGoals = getJson("userGoals") || {};



  // let userGoalTotCO2 = userGoals ? userGoals["totalGoal"] : -1; // denne må komme fra en annen side eller noe sånt
  // let totalEmission = emissionsBetweenDaysLS(new Date("2020-01-01"), new Date()); // denne må regnes ut eller hentes ut fra et annet sted

  // const [periodeDUMÅT, setRadioValuePeriodeDUMÅT] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [periodeDUMÅ, setRadioValuePeriodeDUMÅ] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [periodeDUM, setRadioValuePeriodeDUM] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [middel, setRadioValueMiddel] = useState("Gå"); // en del av fremkomstmiddelknapper
  // const [sortering, setRadioValueSortering] = useState("Nylig"); // en del av fremkomstmiddelknapper

  if (userGoals["dailyGoal"] === undefined || userGoals["dailyGoal"] === 0 || userGoals["dailyGoal"] ===  null ){
    return (
      <div id="hovedkontainer" className="div__hovedStyle">
        <Header headerText={"Hei, " + personlia["name"]} headerLogo={true}/>
        <Link to="/dev" style={{color: "#000AFA"}}> [ Dev-page<BsPencil/> ]  </Link> 

        <br/><br/>
        <DashboardUtenUserGoal />
        
        <br/><br/><br/>
        <VisualizedTotalStatsLS />

        <br/><br/><br/>
        <ManyFunfactCards />

        <Footer page="/" />
      </div> 
    );
  }

  else {
    return (
      <div id="hovedkontainer" className="div__hovedStyle">
        <Header headerText={"Hei, " + personlia["name"]} headerLogo={true}/>
        <Link to="/dev" style={{color: "#000AFA"}}> [ Dev-page<BsPencil/> ]  </Link> 
        <br/><br/>
        <DashboardMedUserGoalLS userGoals={userGoals} />  

        <br/><br/><br/>
        <VisualizedTotalStatsLS />
        
        <br/><br/><br/>
        <ManyFunfactCards />
        <Footer page="/" />
      </div> 
    );
  }
 



}


/*       // viser hvordan disse skal bli brukt. trenger hooks deklarert litt lenger opp i fila

      <ToggleButtonsSorterEtter
        sortering={sortering}
        onChange={(e) => setRadioValueSortering(e.currentTarget.value)}
      />
      <h5>Fremkomstmiddel valgt: {sortering} </h5>
      <ToggleButtonsFremkomstmiddel
        middel={middel}
        onChange={(e) => setRadioValueMiddel(e.currentTarget.value)}
      />
      <h5>Fremkomstmiddel valgt: {middel} </h5>

      <ToggleButtonsPeriodeDUMÅT periodeDUMÅT={periodeDUMÅT}
        onChange={(e) => setRadioValuePeriodeDUMÅT(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUMÅT}</h5>
      <ToggleButtonsPeriodeDUMÅ
        periodeDUMÅ={periodeDUMÅ}
        onChange={(e) => setRadioValuePeriodeDUMÅ(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUMÅ}</h5>
      <ToggleButtonsPeriodeDUM
        periodeDUM={periodeDUM}
        onChange={(e) => setRadioValuePeriodeDUM(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUM}</h5>
      <HjuletTotalCO2
        theEmission={totalEmission}
        theGoal={userGoalTotCO2}
      />
      <TravelProgressBarsKG />
      <LoremIpsum />
      <TravelProgressBarsPercentage /> 
      */
