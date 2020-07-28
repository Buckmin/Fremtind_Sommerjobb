/* 
        Dette er fila hvor fake testutslipp BLE generert. NÅ er det bare en dict->array + sjekk om emissionsPerDay eksisterer.
*/

import { oppdaterDagligUtslippLS } from "../../../pages/dev";
import { antallDagerMellom, formatDate } from "./randomDateKG";
import { getJson } from "../../../getJson";

export function EmissionsPerDayArrayLS() {
  // tanken med denne blir så å sette alle emissions til 0 for alle dager, så fylles de opp etterhvert.
  //let dag1utslipp = new Date ("2020-01-01") // første dag i brukerens informasjon om utslipp
  let emissionsArray = [];
  let emissionsDict = {};

  if (getJson("emissionsPerDay") !== null) {
    emissionsDict = getJson("emissionsPerDay") || {};
  } else {
    oppdaterDagligUtslippLS();
    emissionsDict = {};
  }
  for (let key in emissionsDict) {
    emissionsArray.push([key, emissionsDict[key]]);
  }

  return emissionsArray;
}

export function emissionsBetweenDaysLS(startDate, endDate) { // new Date, ikke format date!
  let emissionSum = 0;
  let theDay = new Date(startDate);
  let emissionsDict = getJson("emissionsPerDay") || {};
  let whileControlVariable = 0
  while (emissionsDict[formatDate(theDay)] === undefined) { // errorhandling
    theDay.setDate(theDay.getDate() + 1)
    whileControlVariable += 1
    if (whileControlVariable > 500) {
      alert("Start date too far back! Use something else than: ", startDate)
      return null
    }
  }

  let antallDager = antallDagerMellom(theDay, endDate);

  for (let i = -1; i < antallDager - 1; i++) { // i = -1 fordi theDay inkrementeres fra første runde. antallDager -1 for å stoppe på riktig dag
    theDay.setDate(theDay.getDate() + 1);
    emissionSum += emissionsDict[formatDate(theDay)];
  }
  return emissionSum;
}
