import React, {useState, useRef} from "react"

import "../styles/AccordionJS.css"
import Chevron from "./Chevron"

// import MapContainer from "./MapContainer"

// import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";

import Directions from "./Directions";

import {LoadScriptNext} from '@react-google-maps/api';

function AccordionJS(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    //radio
    // const [selectedValue, setSelectedValue] = useState("bil"); //setter bil som default

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }


    return(
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div>
                    <p className="accordion__title">
                        {props.title}
                    </p>
                </div>
                <Chevron className={`${setRotate}`} width={10} fill={"#000000"}/>
            </button>
            <div 
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion__content"
            >
                <div className="accordion__text">
                    {/* ER: Her bruker de noe kalt dangerouslySetInnerHTML i tutorial, prøver å unngå i første omgang */}
                    Fra: {props.fromDest}
                    <br/>
                    Til: {props.toDest}
                    <br/><br/>
                    {/* ER: Radio for transportvalg - kommentert ut for nå*/}
{/*                     <RadioButtons
                        inline //legger valg på samme linje
                        name="transport"
                        legend="Hvordan ønsker du å reise?"
                        choices={[
                            { value: "bil", label: "Bil" },
                            { value: "kollektivt", label: "Kollektivt" },
                            { value: "sykkel", label: "Sykkel" },
                            { value: "gaa", label: "Gå" },
                        ]}
                        selectedValue={selectedValue}
                        onChange={setSelectedValue}
                    />
                    <br/><br/> */}
                    <LoadScriptNext googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'>
                        <Directions/>
                    </LoadScriptNext>
                    <br/><br/>
                </div>
            </div>
        
        </div>
    )
}

export default AccordionJS