import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/profil.css"
import { formatDate, dagerSiden } from "../components/tidslinjeComp/tidslinjeData/randomDateKG"

// lagre til lokal fil: localStorage.setItem({KEY}, JSON.stringify({VARIABEL}))
// hente ut lokal fil: {VARIABEL} = JSON.parse(localStorage.getItem({KEY}))

export default function Home() {

  let [personlia, setPersonlia] = useState("undefined")
  useEffect(() => {
    setPersonlia(JSON.parse(localStorage.getItem("personlia")))
  }, [])


  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="Min profil"/> 
      <p className="p__tekstOverPersonlia"> Navn </p>
      <p className="p__personlia"> {personlia["name"]+ " " + personlia["middleName"] + " " + personlia["lastName"]} </p>
      <p className="p__tekstOverPersonlia"> Adresse </p>
      <p className="p__personlia"> {personlia["adress"]} </p>
      <p className="p__tekstOverPersonlia"> Epost </p>
      <p className="p__personlia"> {personlia["email"]} </p>
      <p className="p__tekstOverPersonlia"> Lastet ned appen </p>
      <p className="p__personlia"> {formatDate(personlia["initialDate"])}, som er {dagerSiden(personlia["initialDate"])} dager siden </p>

 
      <Footer />
    </div>
  )
}

const hovedStyle = {
    //maxWidth: "300px",
    margin: "0 auto"
  };

