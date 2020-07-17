    // denne fila har nå litt misvisende navn
    
    export function sliceOnGivenIndexItemIn2dArr(arr, itemToFind){ // funksjon for å finne index til 2d array, ie velge riktig startsdato for linja
    let theIndex = 0 
    for (var i = 0; i < arr.length; i++){
      if ((arr[i][0]) === (itemToFind)){           // itererer over indexene, og ser etter element 0 i hver index
        theIndex = i                                     // returnerer index hvor element 0 stemmer med itemToFind. Her bør det vel være en break
      }
    }  
    return arr.slice(0, theIndex)      // slicer på funnet index, aldri bak. dersom ingen index blir funnet slicer den på 0, ie ingenting
  }
  
  export function sumOfEmissionsInArray (arr){     // summerer opp et gitt element i en array
    let emissionSum = 0
    for (var i = 0; i < arr.length; i++) {
      emissionSum = emissionSum + arr[i][1]         // første element er dato, siste er kg CO2 i userEmissions
    }
    return emissionSum
  }