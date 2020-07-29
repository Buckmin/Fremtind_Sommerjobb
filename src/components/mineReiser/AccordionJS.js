import React, {useState, useRef} from "react";
import "../../styles/AccordionJS.css";
import Chevron from "./Chevron";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import dummyMap from '../../../static/images/dummyMap.png';
import InfoSectionUpper from "./infoSectionUpper";
import InfoSectionLower from "./infoSectionLower";
import { formatDateWithTimeForHumans } from "../statistics/formatDateFunctions"

export default function AccordionJS(props, {text1, onClick}) {
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
        <div id = 'Single Accordion' className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div id = 'Compact Accordion' className = "test">
                    <p className="accordion_date">
                        {formatDateWithTimeForHumans(new Date(props.dato))}
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
                    onClick = {onClick} >
                        {props.favoritt ? <MdFavorite/> : <MdFavoriteBorder />}
                </IconButton>
            
                <Chevron className={`${setRotate}`} width={10} fill={"#000000"}/>
                
            </button>
            
            <div 
                id = 'Extended Accordion'
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion__content"
            >
                <InfoSectionUpper middel={props.middel} tid={props.tid} lengde={props.lengde}/>
                <img src={dummyMap} alt="dummyMap" className="photo"/>
                <InfoSectionLower kcal={props.kcal} CO2={props.CO2}/>
            </div>
        
        </div>
    )
}