import { EmissionsPerDay } from "./tidslinjeData/emissions"


export const startDate = "	2020-07-05	"     // her må det komme en form for input slik at brukeren kan velge startsdato
// B: Jeg prøvde datepicker fra Jøkul, men ble bare tull. fikk ikke endret slik jeg ville, og var typescript




  const userEmissions = EmissionsPerDay() // hentet fra emissions.js, 2D array [[dato, kg], ...]. Alle utslipp til brukeren
  export const userEmissionsSliced = sliceOnGivenIndexItemIn2dArr(userEmissions, startDate) // array med emissions fra og med vargt startsdato
  export let totalEmission = sumOfEmissionsInArray(userEmissionsSliced) // dette er nå summen av utslipp fra arrayet i emissions.js
  export const tidslinjePixelHoyde = totalEmission*10       // 1kg tar opp 10px
  
  function sliceOnGivenIndexItemIn2dArr(arr, itemToFind){ // funksjon for å finne index til 2d array, ie velge riktig startsdato for linja
    let theIndex = 0 
    for (var i = 0; i < arr.length; i++){
      if (arr[i][0] === itemToFind){                  // itererer over indexene, og ser etter element 0 i hver index
        theIndex = i                                     // returnerer index hvor element 0 stemmer med itemToFind. Her bør det vel være en break
      }
    }  
    return arr.slice(theIndex)      // slicer på funnet index, aldri bak. dersom ingen index blir funnet slicer den på 0, ie ingenting
  }
  
  function sumOfEmissionsInArray (arr){     // summerer opp et gitt element i en array
    let emissionSum = 0
    for (var i = 0; i < arr.length; i++) {
      emissionSum = emissionSum + arr[i][1]         // første element er dato, siste er kg CO2 i userEmissions
    }
    return emissionSum
  }