import React, {useState, useRef} from "react"

import "../../styles/AccordionJS.css"
import Chevron from "./Chevron"


function AccordionTravel(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");


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
                        <div className="inline"> Metode: {props.mode} <br /> Tid: {props.time} min<br />Avstand: {props.distance} m<br />CO2: {props.co2} kg</div>
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
                    Dette er en test
                </div>
            </div>
        
        </div>
    )
}

export default AccordionTravel