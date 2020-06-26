import React from "react"


// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import LoremIpsum from "../components/testtext"


// her er selve funksjonen som kjører komponentene ut på skjermen
// B: ikke egt sikker på "export default", det var i tutorialen
export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="headeren vår"/>  {/* dette er en kommentar. sånn henter vi ut komponenter 
                    cmd+klikk sender deg rett til koden der "Header" ligger*/}
      <div>Hello world!</div>
      <LoremIpsum />
    </div>
  )
}


const hovedStyle = {
  maxWidth: "500px",
  margin: "0 auto"
};