import React, {useState, useRef} from "react"

import "../styles/AccordionJS.css"
//import BsChevronRight from "react-icons/bs"
import Chevron from "../components/Chevron"


function AccordionJS(props) {

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
                <p className="accordion__title">{props.title}</p>
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
                    <br/>
                    {/* ER: Ikke implementert props under enda, usikker på om vi kan ta inn komponent som prop? */}
                    {props.transport}
                    <br/>
                    {props.CO2Bar}
                    <br/>
                    {props.travelDetails}
                </div>
            </div>
        
        </div>
    )
}

export default AccordionJS