/* Emma x2 */
import React from "react"

import Header from "../components/header"
import Footer from "../components/Footer"
import TabBar from "../components/tabs"
import AccordionJS from "../components/AccordionJS"



export default function MyRoutes () {
    return (

        <div style={hovedStyle}>
            <Header headerText="Mine Ruter"/>
            <TabBar labelOne = "Nylig" labelTwo = "Mest reist" labelThree = "Favoritter"/>
            <Footer/>
        </div>
        
    )
}

const hovedStyle = {
    //maxWidth: "300px",
    margin: "0 auto"
  };
