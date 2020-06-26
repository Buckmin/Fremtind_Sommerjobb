import React from "react"
import Header from "../components/header"
import MyFooter from "../components/footer"


export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="profil"/> 
      <MyFooter />
    </div>
  )
}

const hovedStyle = {
    maxWidth: "500px",
    margin: "0 auto"
  };