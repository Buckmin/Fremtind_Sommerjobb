import React, {useState, useRef} from "react"

import "../styles/AccordionJS.css"
import Chevron from "./Chevron"

import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import dummyMap from '../images/dummyMap.png';
import InfoSectionUpper from "./infoSectionUpper"
import InfoSectionLower from "./infoSectionLower"

function AccordionJS(props) {
    let tur = props.tur
    console.log(tur)

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

    /* handleFavChange = (event) => {
        tur[Object.keys(tur)].fav === true ? false : true
    } */

    return(
        <div id = 'Single Accordion' className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div id = 'Compact Accordion' className = "test">
                    <p className="accordion_date">
                        {Object.keys(tur)}
                    </p>
                    
                    <p className="accordion__address">
                        Fra: {tur[Object.keys(tur)].fra}
                        <br/>
                        Til: {tur[Object.keys(tur)].til}
                    </p> 
                </div>
                <IconButton 
                /* onClick = {this.handleFavChange} */
                style= {{position: 'absolute', right: 0, top: 0,}}
                aria-label= "FavoriteBorderIcon" 
                className='fav_button'>
                    <FavoriteBorderIcon />
                </IconButton>
                <Chevron className={`${setRotate}`} width={10} fill={"#000000"}/>
            </button>
            <div 
                id = 'Extended Accordion'
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion__content"
            >
                <InfoSectionUpper turInfo = {tur}/>
                <img src={dummyMap} alt="dummyMap" className="photo"/>
                <InfoSectionLower turInfo = {tur}/>
            </div>
        
        </div>
    )
}

export default AccordionJS