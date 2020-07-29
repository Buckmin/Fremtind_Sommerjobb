import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { MountainIkon } from "./customIkoner"
import { Link } from "gatsby"
import { ToggleButtonsPeriodeDUMÅT } from "./tidsperiodeknapper"
import { HjuletTotalCO2 } from "./statistics/hjulet"
import { getJson } from "../getJson"
import { emissionsBetweenDaysLS } from "./statistics/emissionsAndDates"
import { formatDate } from "./statistics/formatDateFunctions"
import { TravelProgressBarsPercentageLS, TravelProgressBarsKgLS, TravelProgressBarsCaloriesLS } from "./statistics/progressBars"

// i denne fila er de ulike visningene av dashboard, avhengig om user har mål eller ikke.
// dropper nå muligheten for å ikke velge et mål.
// valgte å kalle det grense fremfor mål nå

export function DashboardUtenUserGoal () {
    return(

        <div id="utenUtslippsgrense">
            <p id="tekstOver">Du har ikke satt deg en utslippsgrense enda</p>
            <p style={{textAlign: "center"}}> <MountainIkon /> </p>
            <p style={{textAlign: "center"}}>
                <Link id="setteGrensenLink" to="/settegrensen">
                    <Button id="bareKnappForDesing"> Sett en utslippsgrense </Button>
                </Link>
            </p>
            <p style={{width: "80%", fontSize: 12, fontWeight: 600}}>Start med å sette en grense for CO2 utslipp. Ut i fra forbruk kan du justere grensen din for å redusere utslippet ditt.</p>
        </div>
    )
}


export function DashboardMedUserGoalLS ({userGoals}) { // markerer alle funksjoner som bruker localStorage med LS
    const [periodeDUMÅT, setRadioValuePeriodeDUMÅT] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
    const emissionsDict = getJson("emissionsPerDay") // utslippsdict, for hjulet og regne ut tall
    let translationGoalDict = {
        "Dag" : "dailyGoal", "Uke" : "weeklyGoal", "Måned" : "monthlyGoal", "År" : "yearlyGoal", "Total" : "totalGoal"
    }

    return (
        <div>
            <ToggleButtonsPeriodeDUMÅT periodeDUMÅT={periodeDUMÅT} onChange={(e) => setRadioValuePeriodeDUMÅT(e.currentTarget.value)}/> {" "}

            <br/>
            <HjuletTotalCO2 theEmission={emissionsInAPeriodLS(periodeDUMÅT, emissionsDict)} theGoal={userGoals[translationGoalDict[periodeDUMÅT]]} />
        
            <TravelProgressBarsPercentageLS />

            <TravelProgressBarsKgLS />
            <br/>
            <TravelProgressBarsCaloriesLS />
        
        </div>
  )
}


function emissionsInAPeriodLS (period, emissionsDict) {
    let today = new Date()
    let startDate = new Date () // denne endrer if-statementene dersom uke, mnd, år, eller tot
    if (period === "Dag") {
        return emissionsDict[formatDate(today)] // returnerer emissions i dag
    }
    if (period === "Uke") {
        return emissionsBetweenDaysLS(startDate.setDate(startDate.getDate() - 7 ), today) // se 
    }
    if (period === "Måned") {
        return emissionsBetweenDaysLS(startDate.setDate(startDate.getDate() - 30 ), today) // disse tar nå en mnd tilbake, ikke inneværende mnd
    }
    if (period === "År") {
        return emissionsBetweenDaysLS(startDate.setDate(startDate.getDate() - 356 ), today) // 
    }
    if (period === "Total") {
        return emissionsBetweenDaysLS(getJson("personlia")["initialDate"], new Date()) // denne verdien må tilpasse seg brukerens nedlastningsdato
    }
    else {
        return null
    }
}