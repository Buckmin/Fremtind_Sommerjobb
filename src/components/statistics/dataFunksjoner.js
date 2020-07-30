// import React from "react"
import { getJson, setJson } from "../../getJson"
import { formatDate } from "./formatDateFunctions"

/*

her er funksjonene som tar inn alleTurer og sender data til de andre dict vi bruker

userGoals           	{"dailyGoal":1,"weeklyGoal":7,"monthlyGoal":30,"yearlyGoal":365,"totalGoal":206}	
emissionsPerDay	        {"2020.01.01":9,"2020.01.02":5,"2020.01.03":3,"2020.01.04":9,"2020.01.05":10,"2020.01.06":4,"2020.01.07":10,"2020.01.08":6,"2020.01.09":7,"2020.01.10":7,"2020.01.11":3,"2020.01.12":9,"2020.01.13":6,"2020.01.14":7,"2020.01.15":2,"2020.01.16":2,"2020.01.17":9,"2020.01.18":4,"2020.01.19":0,"2020.01.20":8,"2020.01.21":3,"2020.01.22":6,"2020.01.23":8,"2020.01.24":3,"2020.01.25":2,"2020.01.26":3,"2020.01.27":9,"2020.01.28":2,"2020.01.29":9,"2020.01.30":3,"2020.01.31":3,"2020.02.01":6,"2020.02.02":5,"2020.02.03":7,"2020.02.04":8,"2020.02.05":7,"2020.02.06":0,"2020.02.07":9,"2020.02.08":1,"2020.02.09":8,"2020.02.10":4,"2020.02.11":2,"2020.02.12":5,"2020.02.13":0,"2020.02.14":10,"2020.02.15":10,"2020.02.16":0,"2020.02.17":8,"2020.02.18":3,"2020.02.19":5,"2020.02.20":5,"2020.02.21":8,"2020.02.22":3,"2020.02.23":4,"2020.02.24":0,"2020.02.25":7,"2020.02.26":8,"2020.02.27":4,"2020.02.28":5,"2020.02.29":2,"2020.03.01":3,"2020.03.02":6,"2020.03.03":5,"2020.03.04":4,"2020.03.05":8,"2020.03.06":7,"202…	
amountOfTrips	        {"walkTrips":15,"bikeTrips":1,"trainTrips":15,"carTrips":13}	
personlia	            {"name":"Kari","middleName":"Kanari","lastName":"Nordmann","adress":"Hammerborgsgate 2, Oslo","email":"kari@email.com","initialDate":"2020-01-01T00:00:00.000Z"}	
alleTurer	            {"2020-07-22T14:29":{"fra":"Trondheim Torg","til":"Gløshaugen","lengde":1545,"tid":1259,"middel":"WALKING","CO2":0,"kcal":75,"favoritt":false},"2020-07-21T12:33":{"fra":"Trondheim Torg","til":"Gløshaugen","lengde":2109,"tid":464,"middel":"DRIVING","CO2":193,"kcal":0,"favoritt":false},"2020-07-21T16:33":{"fra":"Trondheim Torg","til":"Gløshaugen","lengde":1827,"tid":533,"middel":"BICYCLING","CO2":0,"kcal":46,"favoritt":false},"2020-07-21T15:32":{"fra":"Leangen Ishall","til":"Gløshaugen","lengde":6122,"tid":504,"middel":"DRIVING","CO2":560,"kcal":0,"favoritt":false},"2020-01-01T12:00":{"fra":"Oslo Sentralstasjon","til":"Adamstuen","lengde":2886,"tid":2343,"middel":"WALKING","CO2":0,"kcal":140,"favoritt":false},"2020-07-10T14:03":{"fra":"Oslo Sentralstasjon","til":"Adamstuen","lengde":2886,"tid":2343,"middel":"WALKING","CO2":0,"kcal":140,"favoritt":false},"2020-07-24T16:15":{"fra":"Universitetet i Bergen","til":"Fantoft Studentboliger","lengde":6089,"tid":1369,"middel":"TRANSIT","CO2":441…	
CO2SumTransportMeans	{"walkEmission":13,"bikeEmission":59,"trainEmission":7,"carEmission":21}	

*/


export function upddateLSfromAlleTurerLS () {
    let alleTurer = getJson("alleTurer")
    let newEmissionsPerDay = emptyEmissionsPerDay()
    let newCO2SumTransportMeans = emptyTripsEmissionsDict()
    let newAmountOfTrips = emptyAmountOfTrips()
    let newTripsCaloriesDict = emptyTripsCaloriesDict ()
    let totalStats = emptyTotalStats ()
    for (let key in alleTurer){ //
        newEmissionsPerDay[formatDate(new Date(key))] = alleTurer[key]["CO2"] //   // emissionsPerDay      legger til CO2 i dict for emissions per day
        // console.log(key)
        if (alleTurer[key]["middel"] === "WALKING"){
            newCO2SumTransportMeans["walkEmission"] += alleTurer[key]["CO2"]       // CO2SumTransportMeans
            newTripsCaloriesDict["walkCalories"] += alleTurer[key]["kcal"]         // kCalSumTransportMeans
            newAmountOfTrips["walkTrips"] += 1                                     // amountOfTrips
        }
        if (alleTurer[key]["middel"] === "BICYCLING"){
            newCO2SumTransportMeans["bikeEmission"] += alleTurer[key]["CO2"]
            newTripsCaloriesDict["bikeCalories"] += alleTurer[key]["kcal"]         // kCalSumTransportMeans
            newAmountOfTrips["bikeTrips"] += 1
        }
        if (alleTurer[key]["middel"] === "TRANSIT"){
            newCO2SumTransportMeans["transitEmission"] += alleTurer[key]["CO2"]
            newTripsCaloriesDict["transitCalories"] += alleTurer[key]["kcal"]      // kCalSumTransportMeans
            newAmountOfTrips["transitTrips"] += 1
        }
        if (alleTurer[key]["middel"] === "DRIVING"){
            newCO2SumTransportMeans["carEmission"] += alleTurer[key]["CO2"]
            newTripsCaloriesDict["carCalories"] += alleTurer[key]["kcal"]         // kCalSumTransportMeans
            newAmountOfTrips["carTrips"] += 1
        }
        totalStats["totalEmission"] += alleTurer[key]["CO2"]
        totalStats["totalCalories"] += alleTurer[key]["kcal"]
        totalStats["totalLength"] += alleTurer[key]["lengde"]
        totalStats["totalTrips"] += 1
        totalStats["totalTime"] += alleTurer[key]["tid"]
    }

    // setter informasjonen som er hentet ut til localStorage
    setJson("totalStats", totalStats)
    setJson("amountOfTrips", newAmountOfTrips)
    setJson("emissionsPerDay", newEmissionsPerDay)
    setJson("kCalSumTransportMeans", newTripsCaloriesDict)
    setJson("CO2SumTransportMeans", newCO2SumTransportMeans)
    
    
}






// Under her er bare funksjoner som setter tomme dictionaries.

function emptyEmissionsPerDay () { // lager tom emissionsPerDay dict
    let currentDag = new Date("2020-01-01");
    let emissionOnDay = 0;
    let emissionsDict = {};
    currentDag.setDate(currentDag.getDate() - 1); // plusser på 1 på dag allerede første iterasjon i for-løkke
    for (let i = 0; i < 366; i++) {
        currentDag.setDate(currentDag.getDate() + 1);
        emissionsDict[formatDate(new Date(currentDag))] = emissionOnDay;
    }
    return emissionsDict
}

function emptyTripsEmissionsDict () {
    let tripsEmissionDict = {
        walkEmission: 0,
        bikeEmission: 0,
        transitEmission: 0,
        carEmission: 0,
      };
      return tripsEmissionDict
}

function emptyTripsCaloriesDict () {
    let tripsCaloriesDict = {
        walkCalories: 0,
        bikeCalories: 0,
        transitCalories: 0,
        carCalories: 0,
      };
      return tripsCaloriesDict
}

function emptyAmountOfTrips () {
    let tripsDict = {
        walkTrips: 0,
        bikeTrips: 0,
        transitTrips: 0,
        carTrips: 0,
      };
      return tripsDict
}

function emptyTotalStats () {
    let totalStats = {
        totalEmission: 0,
        totalCalories: 0,
        totalLength: 0,
        totalTrips: 0,
        totalTime: 0,
    }
    return totalStats
}