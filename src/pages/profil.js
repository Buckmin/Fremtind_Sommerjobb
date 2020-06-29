import React from "react"
import Header from "../components/header"
import MyFooter from "../components/footer"
import { RandomArrDateKgCO2, StringOfRandomArrDateKgCO2 } from "../data/randomdata"


export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="profil"/> 
      {DatoArrayDivs(randomArray)}
      <MyFooter />
    </div>
  )
}

const hovedStyle = {
    maxWidth: "500px",
    margin: "0 auto"
  };



  // her er koden som viser dato og random CO2-tall
  const randomArray = StringOfRandomArrDateKgCO2()


// denne er for å få hver linje som en div slik at de kommer under hverandre og ikke rett etter hverandre
  function DatoArrayDivs (arr) {
    var arrOut = []
    for (var i = 0; i < arr.length; i++) {
      arrOut.push(<div>{arr[i]}</div>)
    }
    return arrOut
  }