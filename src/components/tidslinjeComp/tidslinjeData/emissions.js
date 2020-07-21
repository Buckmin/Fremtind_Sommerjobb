/* 
        Dette er fila hvor fake testutslipp BLE generert. NÅ er det bare en dict->array + sjekk om emissionsPerDay eksisterer.
*/

import { oppdaterDagligUtslipp } from "../../../pages/dev";
import { antallDagerMellom, formatDate } from "./randomDateKG";
import { getJson } from "../../../getJson";

export function EmissionsPerDayArray() {
  // tanken med denne blir så å sette alle emissions til 0 for alle dager, så fylles de opp etterhvert.
  //let dag1utslipp = new Date ("2020-01-01") // første dag i brukerens informasjon om utslipp
  let emissionsArray = [];
  let emissionsDict = {};

  if (getJson("emissionsPerDay") !== null) {
    emissionsDict = getJson("emissionsPerDay") || {};
  } else {
    oppdaterDagligUtslipp();
    emissionsDict = {};
  }
  for (let key in emissionsDict) {
    emissionsArray.push([key, emissionsDict[key]]);
  }

  return emissionsArray;
}

export function emissionsBetweenDays(startDate, endDate) {
  let antallDager = antallDagerMellom(startDate, endDate);
  let emissionSum = 0;
  let theDay = new Date(startDate);
  let emissionsDict = getJson("emissionsPerDay") || {};
  for (let i = -1; i < antallDager; i++) {
    // +1 fordi det inkluderer også den siste dagen
    theDay.setDate(theDay.getDate() + 1);
    emissionSum += emissionsDict[formatDate(theDay)];
  }
  return emissionSum;
}
