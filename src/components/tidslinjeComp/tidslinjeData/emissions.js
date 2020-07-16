/* 
        Dette er fila hvor fake testutslipp blir generert. for å teste koden vi har.
*/

import { oppdaterDagligUtslipp } from "../../../pages/dev"

export function EmissionsPerDay() { // tanken med denne blir så å sette alle emissions til 0 for alle dager, så fylles de opp etterhvert.
    //let dag1utslipp = new Date ("2020-01-01") // første dag i brukerens informasjon om utslipp

console.log("kjører EmissionsPerDay()")
console.log((localStorage.getItem("emissionsPerDay") != null))
    if (localStorage.getItem("emissionsPerDay") != null) {
        return JSON.parse(localStorage.getItem("emissionsPerDay"))
    
    }

    else {
        oppdaterDagligUtslipp() // måtte være en const for å kunne kalle funksjonen
        return JSON.parse(localStorage.getItem("emissionsPerDay"))

    }
}