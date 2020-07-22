import React, { useState } from "react";

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header";
import LoremIpsum from "../components/testtext";
import Footer from "../components/footer";

// ER: fremtind-fonter -> trengs kun å importeres en gang i prosjektet
// hvis vi ikke får jøkul-komponenter til å fungere har vi i det minste fontene som gir preg av Fremtind
import "../styles/webfonts.css";

import { TravelProgressBarsKG, TravelProgressBarsPercentage } from "../components/statistics/progressBars";
import { HjuletTotalCO2 } from "../components/statistics/hjulet";
// importen av ...Bars... gir progresjonsbarene. kall de inn som komponenter

import { ToggleButtonsPeriodeDUMÅ, ToggleButtonsPeriodeDUM } from "../components/tidsperiodeknapper";
import { ToggleButtonsFremkomstmiddel } from "../components/fremkomsmiddelknapper";
import { ToggleButtonsSorterEtter } from "../components/sorterEtterKnapper";
import { initalLoadOfData } from "./dev";
import { emissionsBetweenDays } from "../components/tidslinjeComp/tidslinjeData/emissions";
import { getJson } from "../getJson";
import { BsPencil } from "react-icons/bs";
import { Link } from "gatsby";
import { CowIkon, FremtindLogoIkon } from "../components/customIkoner";



export default function Home() {
  initalLoadOfData(); // denne funksjonen oppretter lagret (per nå tilfeldig) data i localStorage

  //let personlia = getJson("personlia");
  let userGoals = getJson("userGoals") || {};

  let userGoalTotCO2 = userGoals ? userGoals["totalGoal"] : -1; // denne må komme fra en annen side eller noe sånt
  let totalEmission = emissionsBetweenDays(new Date("2020-01-01"), new Date()); // denne må regnes ut eller hentes ut fra et annet sted

  const [periodeDUMÅ, setRadioValuePeriodeDUMÅ] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  const [periodeDUM, setRadioValuePeriodeDUM] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  const [middel, setRadioValueMiddel] = useState("Gå"); // en del av fremkomstmiddelknapper
  const [sortering, setRadioValueSortering] = useState("Nylig"); // en del av fremkomstmiddelknapper

  return (
    <div id="hovedkontainer" className="div__hovedStyle">
      <Header headerText="Velkommen til Vanir" />
      <CowIkon />
      <Link to="/dev" style={{color: "#000AFA"}}> Dev-page<BsPencil/>  </Link>
      <FremtindLogoIkon resize={true} newWidth={120}/>
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
      <ToggleButtonsPeriodeDUMÅ
        periodeDUMÅ={periodeDUMÅ}
        onChange={(e) => setRadioValuePeriodeDUMÅ(e.currentTarget.value)}
      />{" "}
      {/* husk useState variabel og funksjon! */}
      <h5>periode valgt: {periodeDUMÅ}</h5>
      <ToggleButtonsPeriodeDUM
        periodeDUM={periodeDUM}
        onChange={(e) => setRadioValuePeriodeDUM(e.currentTarget.value)}
      />{" "}
      {/* husk useState variabel og funksjon! */}
      <h5>periode valgt: {periodeDUM}</h5>
      <HjuletTotalCO2
        totalEmission={totalEmission}
        userGoalTotCO2={userGoalTotCO2}
      />
      <TravelProgressBarsKG />
      <LoremIpsum />
      <TravelProgressBarsPercentage />
      <Footer page="/" />
    </div>
  );
}
