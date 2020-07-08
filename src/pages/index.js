import React from "react"


// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import LoremIpsum from "../components/testtext"
import Footer from "../components/footer"

// ER: fremtind-fonter -> trengs kun å importeres en gang i prosjektet
// hvis vi ikke får jøkul-komponenter til å fungere har vi i det minste fontene som gir preg av Fremtind
import  "../styles/webfonts.css"


// her er selve funksjonen som kjører komponentene ut på skjermen
// B: ikke egt sikker på "export default", det var i tutorialen
// ER: Export default er bare en enklere måte å eksportere komponenten på. Kan også skrive function Home() {}
// og så export default home under funksjonen.
export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="headeren vår"/>  {/* dette er en kommentar. sånn henter vi ut komponenter 
                    cmd+klikk sender deg rett til koden der "Header" ligger*/}
      <div>Hello world!</div>
      <LoremIpsum />
      <Footer />
    </div>
  )
}




const hovedStyle = {
  //maxWidth: "300px",
  margin: "0 auto"
};

