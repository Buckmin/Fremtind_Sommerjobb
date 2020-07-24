import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar"; // https://react-bootstrap.github.io/components/progress/
import {
  MdDirectionsWalk,
  MdDirectionsBike,
  MdTrain,
  MdDirectionsBus,
  MdDirectionsCar,
} from "react-icons/md";

import { getJson } from "../../getJson";

import "bootstrap/dist/css/bootstrap.min.css"; // styling på alle bootstrap-greier. Uten denne blir de kjedelige/borte fra skjermen
import "../../styles/progressBars.css";

export function TravelProgressBarsKG() {
  // ta inn dato/tidsperiode? ta inn array(dict?) med utslipp.
  // OPPDATERING PÅ DENNE OG NESTE FUNKSJON FOR BARER:
  // Nå tar de inn dict fra localStorage og sender ut tall fra det.
  // localStorage verdier initierers på hjemmesiden
  let tripsEmissionDict = getJson("CO2SumTransportMeans") || {};

  let walkEmission = tripsEmissionDict["walkEmission"];
  let bikeEmission = tripsEmissionDict["bikeEmission"];
  let trainEmission = tripsEmissionDict["trainEmission"];
  let busEmission = tripsEmissionDict["busEmission"];
  let carEmission = tripsEmissionDict["carEmission"];
  let sumEmissions =
    walkEmission + bikeEmission + carEmission + busEmission + trainEmission;
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
        IconName={<MdTrain size={iconSize} />}
        CO2number={trainEmission}
        sumEmissions={sumEmissions}
      />
      <OneBarWithIconAndTekst
        id="bus"
        IconName={<MdDirectionsBus size={iconSize} />}
        CO2number={busEmission}
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
      <span className="span__tekstOverBaren"> {props.CO2number} kg </span>
      <div id="bareBaren" className="div__bareBaren">
        <ProgressBar animated striped variant="info" now={andelAvBar} />
      </div>
    </div>
  );
}

// _________________________________________________________________________________________
// DETTE ER BAR NUMMER TO, den med prosentvis fordeling av antall trips. Denne justerer seg også
// OBS! denne funksjonen er nå ganske avhengig av skjermstørrelsen

export function TravelProgressBarsPercentage() {
  let tripsDict = getJson("amountOfTrips") || {};
  let walkTrips = tripsDict["walkTrips"];
  let bikeTrips = tripsDict["bikeTrips"];
  let trainTrips = tripsDict["trainTrips"];
  let busTrips = tripsDict["busTrips"];
  let carTrips = tripsDict["carTrips"];
  let sumTrips = walkTrips + bikeTrips + trainTrips + busTrips + carTrips;
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
        IconName={<MdTrain size={iconSize} />}
        antallTrips={trainTrips}
        sumTrips={sumTrips}
      />
      <OneBarWithMovingIconAndTextPercentage
        id="bus"
        IconName={<MdDirectionsBus size={iconSize} />}
        antallTrips={busTrips}
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
