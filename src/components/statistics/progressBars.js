import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar"; // https://react-bootstrap.github.io/components/progress/
import {
  MdDirectionsWalk,
  MdDirectionsBike,
  MdDirectionsBus,
  MdDirectionsCar,
} from "react-icons/md";

import { getJson } from "../../getJson";

import "bootstrap/dist/css/bootstrap.min.css"; // styling på alle bootstrap-greier. Uten denne blir de kjedelige/borte fra skjermen
import "../../styles/progressBars.css";

export function TravelProgressBarsKgLS() {
  // ta inn dato/tidsperiode? ta inn array(dict?) med utslipp.
  // OPPDATERING PÅ DENNE OG NESTE FUNKSJON FOR BARER:
  // Nå tar de inn dict fra localStorage og sender ut tall fra det.
  // localStorage verdier initierers på hjemmesiden
  let tripsEmissionDict = getJson("CO2SumTransportMeans") || {};

  let walkEmission = tripsEmissionDict["walkEmission"];
  let bikeEmission = tripsEmissionDict["bikeEmission"];
  let transitEmission = tripsEmissionDict["transitEmission"];
  let carEmission = tripsEmissionDict["carEmission"];
  let sumEmissions =
    walkEmission + bikeEmission + carEmission + transitEmission;
  // disse variablene burde være i et array, men fordi det er usikkert hvordan data inn blir seende ut,
  // så er de per denne iterasjonen kun satt som konstanter med navn.
  // er enkelt å bytte ut og legge inn disse som props i return-callet under.
  let iconSize = 24; // størrelsen på ikonene

  return (
    <div id="theProgressBars" className="div__theProgressBars">

      <p style={{fontSize: 16, fontWeight: 300}}>Utslipp fra ulike transportmidler</p>


      <OneBarWithIconAndTekst
        id="walk"
        IconName={<MdDirectionsWalk size={iconSize} />}
        CO2number={walkEmission}
        sumEmissions={sumEmissions}
      />
      <OneBarWithIconAndTekst
        id="bike"
        IconName={<MdDirectionsBike size={iconSize} />}
        CO2number={bikeEmission}
        sumEmissions={sumEmissions}
      />
      <OneBarWithIconAndTekst
        id="train"
        IconName={<MdDirectionsBus size={iconSize} />}
        CO2number={transitEmission}
        sumEmissions={sumEmissions}
      />
      <OneBarWithIconAndTekst
        id="car"
        IconName={<MdDirectionsCar size={iconSize} />}
        CO2number={carEmission}
        sumEmissions={sumEmissions}
      />
    </div>
  );
}

function OneBarWithIconAndTekst(props) {
  let andelAvBar = ((props.CO2number / props.sumEmissions) * 100).toFixed(1);
  return (
    <div id="enBarMedIkonOgTekst" className="div__enBarMedIkonOgTekst">
      {props.IconName}
      <span className="span__tekstOverBaren"> {props.CO2number} g </span>
      <div id="bareBaren" className="div__bareBaren">
        <ProgressBar animated striped variant="info" now={andelAvBar} />
      </div>
    </div>
  );
}

function OneBarWithIconAndTekstCALORIES(props) {
  let andelAvBar = ((props.CO2number / props.sumCalories) * 100).toFixed(1);
  return (
    <div id="enBarMedIkonOgTekst" className="div__enBarMedIkonOgTekst">
      {props.IconName}
      <span className="span__tekstOverBaren"> {props.CO2number} kcal </span>
      <div id="bareBaren" className="div__bareBaren">
        <ProgressBar animated striped variant="info" now={andelAvBar} />
      </div>
    </div>
  );
}
// _________________________________________________________________________________________
// DETTE ER BAR NUMMER TO, den med prosentvis fordeling av antall trips. Denne justerer seg også
// OBS! denne funksjonen er nå ganske avhengig av skjermstørrelsen

export function TravelProgressBarsPercentageLS() {
  let tripsDict = getJson("amountOfTrips") || {};
  let walkTrips = tripsDict["walkTrips"];
  let bikeTrips = tripsDict["bikeTrips"];
  let transitTrips = tripsDict["transitTrips"];
  let carTrips = tripsDict["carTrips"];
  let sumTrips = walkTrips + bikeTrips + transitTrips + carTrips;
  let iconSize = 24; // størrelsen på ikonene

  return (
    <div id="theProgressBars" style={{}} className="div__theProgressBarsPercent">
      <p style={{fontSize: 16, fontWeight: 300}}>Reisevaner</p>
      <p style={{fontSize: 21, fontWeight: 600}}>{sumTrips}</p>
      <p style={{fontSize: 12, fontWeight: 600}}>Reiser totalt</p>

      <OneBarWithMovingIconAndTextPercentage
        id="walk"
        IconName={<MdDirectionsWalk size={iconSize} />}
        antallTrips={walkTrips}
        sumTrips={sumTrips}
      />
      <OneBarWithMovingIconAndTextPercentage
        id="bike"
        IconName={<MdDirectionsBike size={iconSize} />}
        antallTrips={bikeTrips}
        sumTrips={sumTrips}
      />
      <OneBarWithMovingIconAndTextPercentage
        id="train"
        IconName={<MdDirectionsBus size={iconSize} />}
        antallTrips={transitTrips}
        sumTrips={sumTrips}
      />
      <OneBarWithMovingIconAndTextPercentage
        id="car"
        IconName={<MdDirectionsCar size={iconSize} />}
        antallTrips={carTrips}
        sumTrips={sumTrips}
      />
    </div>
  );
}

function OneBarWithMovingIconAndTextPercentage(props) {
  let andelAvBar = ((props.antallTrips / props.sumTrips) * 100).toFixed(1); // gir andelen som skal være skravert. floor for fint tall
  let leftAdjust = (350 * andelAvBar) / 100; // 350 er width på diven rundt barene.
  let divWithIconAndPercentage = 90;
  if (leftAdjust > 350 - divWithIconAndPercentage) {
    leftAdjust = 350 - divWithIconAndPercentage;
  } // nå er dette ganske låst til at barene ikke blir størren enn 350px wide
  let bevegendeIkonOgTekstStyle = {
    width: divWithIconAndPercentage,
    left: leftAdjust,
    position: "relative",
  }; // style her justerer s.a. det blir nice
  return (
    <div id="enBarMedIkonOgTekst" className="div__enBarMedIkonOgTekst">
      <div id="boksRundtBevegelig" style={{ width: "100%" }}>
        <div
          id="bevegendeIkonOgTekst"
          className="div__bevegendeIkonOgTekst"
          style={bevegendeIkonOgTekstStyle}
        >
          {props.IconName} <span> {andelAvBar} % </span>
        </div>
      </div>
      <ProgressBar animated variant="success" now={andelAvBar} />
    </div>
  );
}



export function TravelProgressBarsCaloriesLS() {
  // ta inn dato/tidsperiode? ta inn array(dict?) med utslipp.
  // OPPDATERING PÅ DENNE OG NESTE FUNKSJON FOR BARER:
  // Nå tar de inn dict fra localStorage og sender ut tall fra det.
  // localStorage verdier initierers på hjemmesiden
  let tripsCaloriesDict = getJson("kCalSumTransportMeans") || {};

  let walkCalories = tripsCaloriesDict["walkCalories"];
  let bikeCalories = tripsCaloriesDict["bikeCalories"];
  let transitCalories = tripsCaloriesDict["transitCalories"];
  let carCalories = tripsCaloriesDict["carCalories"];
  let sumCalories = walkCalories + bikeCalories + carCalories + transitCalories;
  // disse variablene burde være i et array, men fordi det er usikkert hvordan data inn blir seende ut,
  // så er de per denne iterasjonen kun satt som konstanter med navn.
  // er enkelt å bytte ut og legge inn disse som props i return-callet under.
  let iconSize = 24; // størrelsen på ikonene

  return (
    <div id="theProgressBars" className="div__theProgressBars">

      <p style={{fontSize: 16, fontWeight: 300}}>Kalorier forbrent fra ulike transportmidler</p>


      <OneBarWithIconAndTekstCALORIES
        id="walk"
        IconName={<MdDirectionsWalk size={iconSize} />}
        CO2number={walkCalories}
        sumCalories={sumCalories}
      />
      <OneBarWithIconAndTekstCALORIES
        id="bike"
        IconName={<MdDirectionsBike size={iconSize} />}
        CO2number={bikeCalories}
        sumCalories={sumCalories}
      />
      <OneBarWithIconAndTekstCALORIES
        id="train"
        IconName={<MdDirectionsBus size={iconSize} />}
        CO2number={transitCalories}
        sumCalories={sumCalories}
      />
      <OneBarWithIconAndTekstCALORIES
        id="car"
        IconName={<MdDirectionsCar size={iconSize} />}
        CO2number={carCalories}
        sumCalories={sumCalories}
      />
    </div>
  );
}