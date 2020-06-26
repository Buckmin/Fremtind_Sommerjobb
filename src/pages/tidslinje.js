/* tidslinjen. Kaja og Brynjar */

import React from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import MyFooter from "../components/footer"


// her er selve funksjonen som kjører komponentene ut på skjermen
// B: ikke egt sikker på "export default", det var i tutorialen
export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="tidslinje"/> 
      <MyFooter />
    </div>
  )
}

const hovedStyle = {
  maxWidth: "500px",
  margin: "0 auto"
};