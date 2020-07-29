// import React, { useState } from "react";
import React from "react";


// under her importerer vi alle kompontentene vi lager
import Header from "../components/header";
import Footer from "../components/footer";

// ER: fremtind-fonter -> trengs kun å importeres en gang i prosjektet
// hvis vi ikke får jøkul-komponenter til å fungere har vi i det minste fontene som gir preg av Fremtind
import "../styles/webfonts.css";

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
  //let carInfo = getJson("carInfo") || {};

  let dashboardArr = []

  // velger Dashboard utfra usergoal eller ikke
  if (userGoals["dailyGoal"] === undefined || userGoals["dailyGoal"] === 0 || userGoals["dailyGoal"] ===  null ){
    dashboardArr.push(<DashboardUtenUserGoal key="uten"/>)
  }
  else {
    dashboardArr.push(<DashboardMedUserGoalLS userGoals={userGoals} key="med"/>)

  }
    return (
      <div id="hovedkontainer" className="div__hovedStyle">
        <Header headerText={"Hei, " + personlia["name"]} headerLogo={true}/>
        <Link to="/dev" style={{color: "#000AFA"}}> [ Dev-page<BsPencil/> ]  </Link> 

        <br/><br/>
        {dashboardArr}
        
        <br/><br/>
        <VisualizedTotalStatsLS />

        <br/><br/>
        <ManyFunfactCards />

        <Footer page="/" />
      </div> 
    );

}
