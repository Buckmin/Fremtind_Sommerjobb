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
import { FormForDailyGoal } from "../components/inputForms";

export default function DevPage() {
  let falseBool = false
  if (falseBool) {
      setInitialAlleTurer() // to-do: lage eksempelturer for lagring
  }

  let tekstHeader = "Devpage";
  initalLoadOfData();

  return (
    <div style={{ textAlign: "center" }}>
      <Header headerText={tekstHeader} />

      <Button onClick={oppdaterDagligUtslipp}> set ny emissionsPerDay</Button>
      <p> </p>
      <Button onClick={updateAmountOfTrips}> set ny amountOfTrips</Button>
      <p> </p>
      <Button onClick={updateEmissionsFromDifferentTripTypes}>
        {" "}
        set ny CO2SumTransportMeans
      </Button>
      <p> </p>
      <Button onClick={setInitialPersonlia}> kjør setInitialPersonlia</Button>
      <p> </p>
      <Button onClick={setInitialCarInfo}> kjør setInitialCarInfo</Button>
      <p> </p>

      <FormForDailyGoal />
      <p> </p>

      <Footer />
    </div>
  );
}

export function initalLoadOfData() {
  if (getJson("emissionsPerDay") === null) {
    oppdaterDagligUtslipp();
  }
  if (getJson("amountOfTrips") === null) {
    updateAmountOfTrips();
  }
  if (getJson("CO2SumTransportMeans") === null) {
    updateEmissionsFromDifferentTripTypes();
  }
  if (getJson("personlia") === null) {
    setInitialPersonlia();
  }
  if (getJson("carInfo") === null) {
    setInitialCarInfo();
  }
  if (getJson("userGoals") === null) {
    updateUserGoal();
  }
  if (getJson("alleTurer") === null) {
    setInitialAlleTurer();
  }

  return null;
}

function setInitialAlleTurer() {
  // dictionary med dato for reiser. dato er key, dato med klokkeslett
  let dato1 = formatDateWithTime(new Date("2020-01-01 12:25")) // datoformat: YYYY.MM.DD-hh:mm
  let alleTurer = {}
  alleTurer[dato1] = {fra : "Oslo S", til: "Skøyen", lengde: 1200, tid: 15, middel: "tog", CO2: 5, favoritt: false}

  setJson("alleTurer", alleTurer)

}




export function oppdaterDagligUtslipp() {
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

function updateAmountOfTrips() {
  let tripsDict = {
    walkTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    bikeTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    trainTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    busTrips: Math.floor(Math.random() * (20 - 0 + 1)),
    carTrips: Math.floor(Math.random() * (20 - 0 + 1)),
  };
  setJson("amountOfTrips", tripsDict);
}

function updateEmissionsFromDifferentTripTypes() {
  let tripsEmissionDict = {
    walkEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    bikeEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    trainEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    busEmission: Math.floor(Math.random() * (100 - 0 + 1)),
    carEmission: Math.floor(Math.random() * (100 - 0 + 1)),
  };
  setJson("CO2SumTransportMeans", tripsEmissionDict);
}

export function updateUserGoal(newDailyGoal) {
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

function setInitialPersonlia() {
  let personliaDict = {
    name: "Kari",
    middleName: "Kanari",
    lastName: "Nordmann",
    birthday: new Date("1995-08-25"),
    address: "Hammersborggata 2, Oslo",
    email: "kari@email.com",
    initialDate: new Date("2020-01-01"),
  };
  setJson("personlia", personliaDict);
}

function setInitialCarInfo() {
  let carDict = {
    brand: "Audi",
    model: "Q5 (SUV)",
    fuel: "Diesel",
    year: 2016,
    registration: "AB12345",
    co2consum: 149, //g/km
    fuelconsum: 0.67,  //L/mil
  };
  setJson("carInfo", carDict);
}

