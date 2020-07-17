import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"

// import createEnturService from '@entur/sdk'



export default function Home() {

  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="profil"/>
      <Footer />
    </div>
  )
}

const hovedStyle = {
    //maxWidth: "300px",
    margin: "0 auto"
  };