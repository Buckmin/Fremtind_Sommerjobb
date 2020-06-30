import React, {useState} from "react"

import "../styles/AccordionJS.css"
//import BsChevronRight from "react-icons/bs"
import Chevron from "../components/Chevron"


function AccordionJS(props) {

    const [setActive, setActiveState] = useState("");

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
    }

    return(
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={"accordion__icon"} width={10} fill={"#777"}/>
            </button>
            <div className="accordion__content">
                <div className="accordion__text">
                    {/* Her bruker de noe kalt dangerouslySetInnerHTML i tutorial, prøver å unngå i første omgang */}
                    {props.content}
                </div>
            </div>
        
        </div>
    )
}

export default AccordionJS