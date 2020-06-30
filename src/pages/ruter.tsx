/* Emma x2 */
import React from "react"

import Header from "../components/header"
import Footer from "../components/Footer"

//import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
//import "@fremtind/jkl-accordion/accordion.min.css";



export default function MyRoutes () {
    return (

        <div style={hovedStyle}>
            <Header headerText="Mine ruter"/>
            {/* ER: Komponenten under (jøkul) fungerer ikke pga en feil react-hooks. Vanskelig å si hvor feilen ligger når man ikke har lagd den selv.*/}
{/*             <Accordion>
                <AccordionItem title="Accordion #1">Her er det som går inni accordion. Det kan være så mangt.</AccordionItem>
                <AccordionItem title="Accordion #2">Her er annet innhold til accordion.</AccordionItem>
            </Accordion> */}
            <Footer />
        </div>
        
    )
}

const hovedStyle = {
    maxWidth: "500px",
    margin: "0 auto"
  };

// ER: kan trenge å overskrive css med svart skrift noen ganger siden default er hvit
const blackStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    color: "black"
  };