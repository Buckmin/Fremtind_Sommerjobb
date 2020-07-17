// en developer page for å kunne endre local storage
// tanken er bare å ha noen knapper for å kunne endre local storage, 
// s.a. vi viser at det visuelle endrer seg med andre inputs/lagret data

import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Header from "../components/header"
import Footer from "../components/footer"

import moment from "moment"
import { formatDate } from "../components/tidslinjeComp/tidslinjeData/randomDateKG"
import { emissionsBetweenDays } from "../components/tidslinjeComp/tidslinjeData/emissions"

export default function DevPage () {
        let tekstHeader = "Devpage"
        initalLoadOfData()

        const [dailyGoal, setDailyGoal] = useState((JSON.parse(localStorage.getItem("userGoals"))["dailyGoal"]))

        return (
            <div style={{textAlign: "center"}}>
                <Header headerText={tekstHeader} />
                
                <Button onClick={oppdaterDagligUtslipp}> set ny emissionsPerDay</Button>
                <p>  </p>
                <Button onClick={updateAmountOfTrips}> set ny amountOfTrips</Button>
                <p>  </p>
                <Button onClick={updateEmissionsFromDifferentTripTypes}> set ny CO2SumTransportMeans</Button>
                <p>  </p>
                <Button onClick={setInitialPersonlia}> kjør setInitialPersonlia</Button>
                <p>  </p>
                <form id="updateDailyGoal">
                    <label htmlFor="dailyGoal">
                        Ny dailyGoal:
                        <input id="dailyGoal" type="number" name="dailyGoal" placeholder="tall" onChange={event => setDailyGoal(event.target.value)}/>
                    </label>
                </form>
                <Button onClick={updateUserGoal(parseInt(dailyGoal))}>dailyGoal oppdateres momentant</Button>
                <p>  </p>

                

                <Footer />
            </div>
        )
}




export function initalLoadOfData() {
    if ((localStorage.getItem("emissionsPerDay") === null)) {
        oppdaterDagligUtslipp()
    }
    if ((localStorage.getItem("amountOfTrips") === null)) {
        updateAmountOfTrips()
    }
    if ((localStorage.getItem("CO2SumTransportMeans") === null)) {
        updateEmissionsFromDifferentTripTypes()
    }
    if ((localStorage.getItem("userGoals") === null )){
        updateUserGoal()
    }
    if ((localStorage.getItem("personlia") === null )) {  
        setInitialPersonlia()
    }

    let emSum = emissionsBetweenDays("2020-01-01", "2020-01-10")

    console.log(emSum)

    return null
}


export function oppdaterDagligUtslipp () { // denne funksjonen oppdaterer arrayet med summen av daglige utslipp. Er per nå bare random tall.
    let currentDag = new Date ("2020-01-01")
    let emissionOnDay = 0
    let minEmission = 0
    let maxEmission = 10
    let emissionsDict = {}
    currentDag.setDate(currentDag.getDate() - 1) // plusser på 1 på dag allerede første iterasjon i for-løkke
    for (let i = 0; i < 366; i++){
        currentDag.setDate(currentDag.getDate() + 1)
        emissionOnDay = Math.floor(Math.random() * (maxEmission - minEmission + 1)) // gir random tall mellom max og min (inkludert max og min)
        emissionsDict[formatDate(new Date(currentDag))] = emissionOnDay
    }
    localStorage.setItem("emissionsPerDay", JSON.stringify(emissionsDict))
}


function updateAmountOfTrips() {
    let tripsDict = {
        walkTrips:   Math.floor(Math.random() * (20 - 0 + 1)),
        bikeTrips:   Math.floor(Math.random() * (20 - 0 + 1)),
        trainTrips:  Math.floor(Math.random() * (20 - 0 + 1)),
        busTrips:    Math.floor(Math.random() * (20 - 0 + 1)),
        carTrips:    Math.floor(Math.random() * (20 - 0 + 1)),
    }
    localStorage.setItem("amountOfTrips", JSON.stringify(tripsDict))
}

function updateEmissionsFromDifferentTripTypes() {
    let tripsEmissionDict = {
        walkEmission:   Math.floor(Math.random() * (100 - 0 + 1)),
        bikeEmission:   Math.floor(Math.random() * (100 - 0 + 1)),
        trainEmission:  Math.floor(Math.random() * (100 - 0 + 1)),
        busEmission:    Math.floor(Math.random() * (100 - 0 + 1)),
        carEmission:    Math.floor(Math.random() * (100 - 0 + 1)),
    }
    localStorage.setItem("CO2SumTransportMeans", JSON.stringify(tripsEmissionDict))
}

function updateUserGoal (newDailyGoal) {
    let userGoalsDict = {
        dailyGoal: 0,
        weeklyGoal: 0,
        monthlyGoal: 0,
        yearlyGoal: 0,
        totalGoal: 0,
    }
    if (newDailyGoal !== undefined ) { userGoalsDict["dailyGoal"] = newDailyGoal }
    else { userGoalsDict["dailyGoal"] = 7 } // hvis det er en inputprop velger den den, hvis ikke velger den 7 kg CO2 per dag
    userGoalsDict["weeklyGoal"] = userGoalsDict["dailyGoal"] * 7 // weekly
    userGoalsDict["monthlyGoal"] = userGoalsDict["dailyGoal"] * 30 // monthly. egt 30,42 dager i ikke-skuddår
    userGoalsDict["yearlyGoal"] = userGoalsDict["dailyGoal"] * 365 //  yearly

    let personlia = JSON.parse(localStorage.getItem("personlia"))
    let daysSinceAppDownload = moment(new Date()).diff(new Date (personlia["initialDate"]), "days")
    userGoalsDict["totalGoal"] = userGoalsDict["dailyGoal"] * (1 + daysSinceAppDownload) // totalt utslipp. dag 1 må telles, derfor +1

    localStorage.setItem("userGoals", JSON.stringify(userGoalsDict))
}

function setInitialPersonlia() {
    let personliaDict = {
        name: "Kari",
        middleName: "Kanari",
        lastName: "Nordmann",
        adress: "Hammerborgsgate 2, Oslo",
        email: "kari@email.com",
        initialDate: new Date("2020-01-01")

    }
    localStorage.setItem("personlia", JSON.stringify(personliaDict))
}



