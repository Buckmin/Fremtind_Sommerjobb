// en developer page for å kunne endre local storage
// tanken er bare å ha noen knapper for å kunne endre local storage, 
// s.a. vi viser at det visuelle endrer seg med andre inputs/lagret data

import React from "react"
import { Button } from "react-bootstrap"
import Header from "../components/header"
import Footer from "../components/footer"


export default function DevPage () {
        let tekstHeader = "Devpage"
        initalLoadOfData()

        let amountArrTest = JSON.parse(localStorage.getItem("amountOfTrips"))
        for (let key in amountArrTest){ 
            console.log(key)
        }
        return (
            <div style={{textAlign: "center"}}>
                <Header headerText={tekstHeader} />
                
                <Button onClick={oppdaterDagligUtslipp}> set ny emissionsPerDay</Button>
                <p>  </p>
                <Button onClick={updateAmountOfTrips}> set ny amountOfTrips</Button>
                <p>  </p>
                <Button onClick={updateEmissionsFromDifferentTripTypes}> set ny CO2SumTransportMeans</Button>
                <p>  </p>


                <Footer />
            </div>
        )
}


export function oppdaterDagligUtslipp () { // denne funksjonen oppdaterer arrayet med summen av daglige utslipp. Er per nå bare random tall.
    let currentDag = new Date ("2020-01-01")
    let emissionOnDay = 0
    let minEmission = 0
    let maxEmission = 10
    const emissionsArr2 = [[new Date(currentDag), Math.floor(Math.random() * (maxEmission - minEmission + 1))]] // første element, første dato kommer ikke med pga ""....getDate() +1"
    for (let i = 0; i < 365; i++){
        currentDag.setDate(currentDag.getDate() + 1)
        emissionOnDay = Math.floor(Math.random() * (maxEmission - minEmission + 1)) // gir random tall mellom max og min (inkludert max og min)
        emissionsArr2.push([new Date(currentDag), emissionOnDay]) // [[dato 1, utslipp dato 1], [dato 2, utslipp dato 2]]
    }
    localStorage.setItem("emissionsPerDay", JSON.stringify(emissionsArr2))
    console.log("er nå oppdatert!")

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

    return null
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