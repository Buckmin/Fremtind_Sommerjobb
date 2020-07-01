/* Emma x2 */
import React from "react"

import Header from "../components/header"
import Footer from "../components/Footer"

import AccordionJS from "../components/AccordionJS"


export default function MyRoutes () {
    return (

        <div style={hovedStyle}>
            <Header headerText="Mine ruter"/>
            <AccordionJS 
                title="Hjem - Jobb" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Hammersborggata 2"
            />
            <AccordionJS 
                title="Jobb - Hjem" 
                fromDest="Hammersborggata 2"
                toDest="Henrik Ibsens gate 1"
            />
            <AccordionJS 
                title="Hjem - Barnehagen" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Damstredet 1"
            />
            <AccordionJS 
                title="Barnehagen - Hjem" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            />
            <Footer/>
        </div>
        
    )
}

const hovedStyle = {
    maxWidth: "294px",
    margin: "0 auto"
  };
