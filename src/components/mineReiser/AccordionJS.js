import React, {useState, useRef} from "react";
import { setJson } from "../../getJson";
import "../../styles/AccordionJS.css";
import Chevron from "./Chevron";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import dummyMap from '../../images/dummyMap.png';
import InfoSectionUpper from "./infoSectionUpper";
import InfoSectionLower from "./infoSectionLower";

function AccordionJS(props) {
    console.log("er i accordion")

    let lengde = props.lengde
    let middel = props.middel
    let tid = props.tid
    let CO2 = props.CO2
    let favoritt = props.favoritt
    let kcal = props.kcal

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

    /* function handleFavChange() {
        favoritt ? favoritt=false : favoritt=true;
    } */

    return(
        <div id = 'Single Accordion' className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div id = 'Compact Accordion' className = "test">
                    <p className="accordion_date">
                        {props.dato}
                    </p>
                    
                    <p className="accordion__address">
                        Fra: {props.fra}
                        <br/>
                        Til: {props.til}
                    </p> 
                </div>
                
                <IconButton 
                    style= {{position: 'absolute', right: 0, top: 0}}
                    aria-label= "FavoriteBorderIcon" 
                    className='fav_button'
                    /* onClick={handleFavChange()} */>
                        {favoritt ? <MdFavorite/> : <MdFavoriteBorder />}
                </IconButton>
            
                <Chevron className={`${setRotate}`} width={10} fill={"#000000"}/>
                
            </button>
            
            <div 
                id = 'Extended Accordion'
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion__content"
            >
                <InfoSectionUpper middel={middel} tid={tid} lengde={lengde}/>
                <img src={dummyMap} alt="dummyMap" className="photo"/>
                <InfoSectionLower kcal={kcal} CO2={CO2}/>
            </div>
        
        </div>
    )
}

export default AccordionJS