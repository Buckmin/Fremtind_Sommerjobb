/* tidslinjen. Kaja og Brynjar */
import React from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import MyFooter from "../components/footer"
import Funfacts from "../data/funfacts"
import EmissionsPerDay from "../data/emissions"
import { BsArrowLeft } from "react-icons/bs"


// her er selve funksjonen som kjører komponentene ut på skjermen
export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="tidslinje"/> 
      <div id="startsdato"> Startdato nå: {startDate}</div>
      <div id="tidslinjeinfo">Noe mer info om tidslinjen her?</div>
      <div id="tidslinjen" style={{height: tidslinjePixelHoyde, position: "relative"}}>
          <HeleLinjen />
          <AlleFaktabokser />
          <YourTotalEmission />
      </div>
      <MyFooter />
    </div>
  )
}

const hovedStyle = {
  maxWidth: "500px",
  margin: "0 auto",
};

var startDate = "	2020-06-05	"     // her må det komme en form for input slik at brukeren kan velge startsdato
// B: Jeg prøvde datepicker fra Jøkul, men ble bare tull. fikk ikke endret slik jeg ville, og var typescript


function HeleLinjen (props) { // denne funksjonen returnerer et array med så mange LinjeElement tidslinjen skal være
  var elementArray = []
  for (var i = 0; i < totalEmission; i+= 0.1){
      elementArray.push(<LinjeElement />)
    }
  return(
    <div id="linjen" style={{float: "left", padding: "10px", width: "10px", height: elementArray.length, backgroundColor: "black"}}>
      {elementArray}
    </div>
  )
}

function AlleFaktabokser (props) { // denne funksjonen lager et array med alle faktaboksene.
  const boksArray = Funfacts ()         // importerer arrayet med alle funfacts. boksArray: [[kg CO2, funfact], [kg, tekst], ...]
  var faktaboksArray = []   // array med faktiske faktabokser. fylles opp i for-løkka nedenfor
  var boksensYverdi = 0     // y-verdien boksen har fra toppen av diven "tidslinjen"
  /* DENNE FUNGERER, MEN VANSKELIG Å VISE DATO. itererer gjennom funfacts-array og sjekket om kg i funfact er større enn totalEmission
  for (var j = 0; j < boksArray.length; j++){ 
    if (boksArray[j][0] > totalEmission) {break}
    */
  var emissionSumOnSpesificDate = 0
  for (var j = 0; j < userEmissionsSliced.length; j++){ // userEmissionsSliced: [[startDato, kg på startDato], [dato2, kg på dato2], ...]
    emissionSumOnSpesificDate += userEmissionsSliced[j][1]   // delsum av utslipp etter startDato
    if (boksArray[0][0] > totalEmission) {break}            // stopper for-løkka dersom fakta-kg er høyere enn totalEmission
    if (emissionSumOnSpesificDate > boksArray[0][0]){        // boksArray[0][0] er kg i første element i funfact-arrayet

      boksensYverdi = 10*boksArray[0][0]            // 1 kg er 10px, så kg CO2 må ganges med 10
      faktaboksArray.push(<FaktaBoks 
        yVerdi={boksensYverdi} 
        boksTekst={boksArray[0][1]}   // sender teksten i arrayet til boksen
        CO2mengde={boksArray[0][0]}   // sender CO2-mengden tilhørende tekst i arrayet til boksen
        dagenPassert={ j }      // viser nå antall dager siden start, ikke dato passert grense. j + 1 fordi dag 1 er index 0
        datoPassert={userEmissionsSliced[j][0]} // denne viser datoen den gitte grensen ble passert
        />)
      boksArray.shift() // fjerner så det første elementet i funfact-arrayet boksArray, slik at [0][0] blir det neste elementet
    }
  }
  return (
    <div id="faktaboksenesBoks" style={{position: "relative", float: "right", width: "90%", height: tidslinjePixelHoyde, backgroundColor: "black"}}>
      {faktaboksArray}
    </div>
  )
}

// dette er funksjonen for de enkelete boksene med fakta om utslipp.
// props: tekst, mengde CO2, dato passert grense
function FaktaBoks (props) {
  // styling på boksen
  var faktaboksStyle = {
    position: "absolute",
    width: "80%",
    height: "80px", // én tekstlinje er 18px, så det blir maks tre linjer pluss info på toppen
    top: props.yVerdi,
    //borderTop: "2px solid green"
  }
  const tekstboksStyle = {      // boksen rundt dato og infotekst
    border: "1px solid green",
    width: "90%",
    padding: "10px",
  }
  const datoStyle = { 
    marginTop: "0", // fjerner mellomrom over tekst
    fontSize: "10px",  // liten skrift
    fontWeight: "800", // bold
  } 
  const tekstInBoksStyle = { 
    marginBottom: "0", // fjerner mellomrom etter tekst. dato og tekst er fortsatt adskilt med mellomrom som vil øke/minke med marginTop her
    fontWeight: "300", // tynnere bokstaver, anti-bold
  }
  const CO2tallStyle = { // style på tallet over faktaboksen
    color: "orange",
    fontSize: "30px",
    fontWeight: "700", // bold
  }
  const kgFaktaboksStyle = { // style på "kg". hvis den skal styles
    color: "orange"
  }
  return (
    <div id="faktaboks" style ={faktaboksStyle}>
      <BsArrowLeft /> <span style ={CO2tallStyle}>{props.CO2mengde}</span> <span style ={kgFaktaboksStyle}>kg</span>
      <div id="tekstboks" style={tekstboksStyle}>
        <p style ={datoStyle}> Passert på dag {props.dagenPassert}, som var {props.datoPassert} </p>
        <p style ={tekstInBoksStyle}>{props.boksTekst}</p>
      </div>
    </div>
  )
}



// her er selve elementene i linjen, brutt ned i små element som blir rendret utfra mengden utslipp.
// B: tanken min er å ha mange små element, feks 1px for 0,1kg CO2, og så legges de under hverandre
function LinjeElement (props) {
  // styling på hvert linjeelement. conditional farge må komme senere
  const elementStyle = {
    backgroundColor: "green", // denne bør være dynamisk utfra mengde CO2
    width: "10px",
    height: "1px", // ett element, 0,1kg CO2 er nå 1px høy
    float: "top", // elementene kommer under hverandre, fra lav til høy
  }
  return (
    <div style={elementStyle}></div> // returnerer ett element, 1px = 0.1kg til tidslinjen
  )
}

function YourTotalEmission (props) { // dette er boksen nederst på tidslinjen som sier hvor mye totalutslippet vil være
  const totalBoksStyle = {
    //backgroundColor: "grey",
    position: "absolute",
    width: "80%",
    height: "auto",
    top: tidslinjePixelHoyde-10, // -10 for å justere opp s.a. pilen peker riktig.
    left: "30px",
  }
  const totalTekstStyle = {
    marginTop: "0",
    marginBottom: "0",
    fontWeight: "300",
    //marginLeft: "30px"
  }
  const totalNumberStyle = {fontSize: "30px", fontWeight: "700"}
  return (
    <div style={totalBoksStyle}>
      <BsArrowLeft /> 
      <span style={totalNumberStyle}>{totalEmission}</span> <span>kg</span>
      <p style={totalTekstStyle}> totalt sluppet ut gjennom reiser siden {startDate}</p>
    </div>
  )
}


// jeg er ukonsekvent på const og var, det er vel  litt dumt. Er usikker på hva som må være var
const userEmissions = EmissionsPerDay() // hentet fra emissions.js, 2D array [[dato, kg], ...]. Alle utslipp til brukeren
var userEmissionsSliced = sliceOnGivenIndexItemIn2dArr(userEmissions, startDate) // array med emissions fra og med vargt startsdato
var totalEmission = sumOfEmissionsInArray(userEmissionsSliced) // dette er nå summen av utslipp fra arrayet i emissions.js
const tidslinjePixelHoyde = totalEmission*10       // 1kg tar opp 10px

function sliceOnGivenIndexItemIn2dArr(arr, itemToFind){ // funksjon for å finne index til 2d array, ie velge riktig startsdato for linja
  var theIndex = 0 
  for (var i = 0; i < arr.length; i++){
    if (arr[i][0] === itemToFind){                  // itererer over indexene, og ser etter element 0 i hver index
      theIndex = i                                     // returnerer index hvor element 0 stemmer med itemToFind
    }
  }  
  return arr.slice(theIndex)      // slicer på funnet index, aldri bak. dersom ingen index blir funnet slicer den på 0, ie ingenting
}

function sumOfEmissionsInArray (arr){     // summerer opp et gitt element i en array
  var emissionSum = 0
  for (var i = 0; i < arr.length; i++) {
    emissionSum = emissionSum + arr[i][1]         // første element er dato, siste er kg CO2 i userEmissions
  }
  return emissionSum
}








// :)