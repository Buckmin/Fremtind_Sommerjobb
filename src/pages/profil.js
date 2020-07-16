import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/profil.css"

// lagre til lokal fil: localStorage.setItem({KEY}, JSON.stringify({VARIABEL}))
// hente ut lokal fil: {VARIABEL} = JSON.parse(localStorage.getItem({KEY}))

export default function Home() {

  const personlia = ["Kari", "Kanari", "Nordmann", "Hammerborgsgate 2, Oslo", "kari@epost.no"]
  localStorage.setItem("personlia", JSON.stringify(personlia))

  let personlia2 = JSON.parse(localStorage.getItem("personlia"))



  // const personliaKeys = ["Fornavn", "Mellomnavn", "Etternavn", "Adresse", "Epost"]

  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="Min profil"/> 
      <p className="p__tekstOverPersonlia"> Navn </p>
      <p className="p__personlia"> {personlia2[0]+ " " + personlia2[1] + " " + personlia2[2]} </p>
      <p className="p__tekstOverPersonlia"> Adresse </p>
      <p className="p__personlia"> {personlia2[3]} </p>
      <p className="p__tekstOverPersonlia"> Epost </p>
      <p className="p__personlia"> {personlia2[4]} </p>

 
      <Footer />
    </div>
  )
}

const hovedStyle = {
    //maxWidth: "300px",
    margin: "0 auto"
  };

