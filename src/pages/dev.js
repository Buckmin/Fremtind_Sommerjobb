// en developer page for å kunne endre local storage
// tanken er bare å ha noen knapper for å kunne endre local storage,
// s.a. vi viser at det visuelle endrer seg med andre inputs/lagret data

import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { getJson, setJson } from "../getJson"

import moment from "moment";
import { formatDate, formatDateWithTime } from "../components/tidslinjeComp/tidslinjeData/randomDateKG";
//import { emissionsBetweenDaysLS } from "../components/tidslinjeComp/tidslinjeData/emissions"
import { FormForDailyGoalLS } from "../components/inputForms";
import { upddateLSfromAlleTurerLS } from "../components/statistics/dataFunksjoner";

export default function DevPageLS() {
  let falseBool = false
  if (falseBool) {
      setInitialAlleTurerLS() // to-do: lage eksempelturer for lagring
  }

  let tekstHeader = "Devpage";
  initalLoadOfDataLS();

  return (
    <div style={{ textAlign: "center" }}>
      <Header headerText={tekstHeader} />

      <Button onClick={oppdaterDagligUtslippLS}> set ny emissionsPerDay</Button>
      <p> </p>
      <Button onClick={updateAmountOfTripsLS}> set ny amountOfTrips</Button>
      <p> </p>
      <Button onClick={updateEmissionsFromDifferentTripTypesLS}>
        {" "}
        set ny CO2SumTransportMeans
      </Button>
      <p> </p>
      <Button onClick={setInitialPersonliaLS}> kjør setInitialPersonliaLS</Button>
      <p> </p>

      <FormForDailyGoalLS />
      <p> </p>

      <p> </p>
      <Button onClick={upddateLSfromAlleTurerLS}> Bruk data fra alleTurer</Button>
      <p> </p>
       

      <Footer />
    </div>
  );
}

export function initalLoadOfDataLS() {
  if (getJson("emissionsPerDay") === null) {
    oppdaterDagligUtslippLS();
  }
  if (getJson("amountOfTrips") === null) {
    updateAmountOfTripsLS();
  }
  if (getJson("CO2SumTransportMeans") === null) {
    updateEmissionsFromDifferentTripTypesLS();
  }
  if (getJson("personlia") === null) {
    setInitialPersonliaLS();
  }
  if (getJson("userGoals") === null) {
    updateUserGoalLS();
  }
  if (getJson("alleTurer") === null) {
    setInitialAlleTurerLS();
  }
  if (getJson("kCalSumTransportMeans") === null) {
    updateCaloriesFromDifferentTripTypesLS();
  }
  if (getJson("totalStats") === null){
    setEmptyTotalStatsLS()
  }

  return null;
}

function setInitialAlleTurerLS() {
  // dictionary med dato for reiser. dato er key, dato med klokkeslett
  let dato1 = formatDateWithTime(new Date("2020-01-01 12:25")) // datoformat: YYYY.MM.DD-hh:mm
  let alleTurer = {}
  alleTurer[dato1] = {fra : "Oslo S", til: "Skøyen", lengde: 1200, tid: 15, middel: "Kollektivt", CO2: 5, favoritt: false}

  setJson("alleTurer", alleTurer)

}




export function oppdaterDagligUtslippLS() {
  // denne funksjonen oppdaterer arrayet med summen av daglige utslipp. Er per nå bare random tall.
  let currentDag = new Date("2020-01-01");
  let emissionOnDay = 0;
  let minEmission = 0;
  let maxEmission = 10;
  let emissionsDict = {};
  currentDag.setDate(currentDag.getDate() - 1); // plusser på 1 på dag allerede første iterasjon i for-løkke
  for (let i = 0; i < 366; i++) {
    currentDag.setDate(currentDag.getDate() + 1);
    emissionOnDay = Math.floor(Math.random() * (maxEmission - minEmission + 1)); // gir random tall mellom max og min (inkludert max og min)
    emissionsDict[formatDate(new Date(currentDag))] = emissionOnDay;
  }
  setJson("emissionsPerDay", emissionsDict);
}

function updateAmountOfTripsLS() {
  let tripsDict = {
    walkTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    bikeTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    transitTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    carTrips: Math.floor(Math.random() * (20 - 0 + 1)),
  };
  setJson("amountOfTrips", tripsDict);
}

function updateEmissionsFromDifferentTripTypesLS() {
  let tripsEmissionDict = {
    walkEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    bikeEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    transitEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    carEmission: Math.floor(Math.random() * (100 - 0 + 1)),
  };
  setJson("CO2SumTransportMeans", tripsEmissionDict);
}

function updateCaloriesFromDifferentTripTypesLS() {
  let tripsCaloriesDict = {
    walkCalories: Math.floor(Math.random() * (100 - 0 + 1)),
    bikeCalories: Math.floor(Math.random() * (100 - 0 + 1)),
    transitCalories: Math.floor(Math.random() * (100 - 0 + 1)),
    carCalories: Math.floor(Math.random() * (100 - 0 + 1)),
  };
  setJson("kCalSumTransportMeans", tripsCaloriesDict);
}

export function updateUserGoalLS(newDailyGoal) {
  let userGoalsDict = {
    dailyGoal: 0,
    weeklyGoal: 0,
    monthlyGoal: 0,
    yearlyGoal: 0,
    totalGoal: 0,
  };
  if (newDailyGoal !== undefined) {
    userGoalsDict["dailyGoal"] = newDailyGoal;
  } else {
    userGoalsDict["dailyGoal"] = 7;
  } // hvis det er en inputprop velger den den, hvis ikke velger den 7 kg CO2 per dag
  userGoalsDict["weeklyGoal"] = userGoalsDict["dailyGoal"] * 7; // weekly
  userGoalsDict["monthlyGoal"] = userGoalsDict["dailyGoal"] * 30; // monthly. egt 30,42 dager i ikke-skuddår
  userGoalsDict["yearlyGoal"] = userGoalsDict["dailyGoal"] * 365; //  yearly

  let personlia = getJson("personlia");
  let daysSinceAppDownload = personlia
    ? moment(new Date()).diff(new Date(personlia["initialDate"]), "days")
    : 0;
  userGoalsDict["totalGoal"] =
    userGoalsDict["dailyGoal"] * (1 + daysSinceAppDownload); // totalt utslipp. dag 1 må telles, derfor +1

  setJson("userGoals", userGoalsDict);
}

function setInitialPersonliaLS() {
  let personliaDict = {
    name: "Kari",
    middleName: "Kanari",
    lastName: "Nordmann",
    adress: "Hammerborgsgate 2, Oslo",
    email: "kari@email.com",
    initialDate: new Date("2020-01-01"),
  };
  setJson("personlia", personliaDict);
}

function setEmptyTotalStatsLS() {
  let totalStats = {
    totalEmission: 0,
    totalCalories: 0,
    totalLength: 0,
    totalTrips: 0,
    totalTime: 0,
}
  setJson("totalStats", totalStats)
}