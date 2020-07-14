import React from "react"
import { Link } from "gatsby"

/* ikonene til navbaren */
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillCursorFill, BsGraphDown} from "react-icons/bs"

/* 
dette er footeren med linker mellom de ulike sidene.
lager den som en komponent vi kan hente inn i de ulike sidene
*/

export default function Footer () {
    let iconSize = 30
    return (
        <div id="baren" style={footerStyle}>
            <BarKnapp iconName={<BsFillHouseDoorFill size={iconSize} />} linkLink="/" />
            <BarKnapp iconName={<BsFillCursorFill size={iconSize}/>} linkLink="/ruter" />
            <BarKnapp iconName={<BsGraphDown size={iconSize}/>} linkLink="/tidslinje"/>
            <BarKnapp iconName={<BsFillPersonFill size={iconSize}/>} linkLink="/profil" />
        </div>
    )
}

/* definerer BarKnapp for å kunne gjenbruke knappene
vil etterhvert legge inn ikoner
tror ikoner kan byttes ut med tekst ved {props.linkImg} */

function BarKnapp (props) {
    return (
        <div id="enkeltknapp" style={knappStyle}>
            <Link to={props.linkLink} activeStyle={linkActive} style={{color: "#3D3D3D"}} >
                {props.iconName}
            </Link>
        </div>
    )
}


/* definerer style med css */ 
const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#6F6F6F",
    height: "60px",
    padding: "15px 0px 15px 0px", // OBS! HVIS DET BLIR FEIL I NAV-BAREN mtp ikonenes plassering:
                                  // skal padding top og bottom være lik:  paddingTop: (height - iconSize) / 2
                                  // fikk ikke til det automatisk uten veldig mye krøll her i denne koden, så ble uten


}
// padding over med textAlign under gjør ikonene midtstilt
// padding er "over høyre under venstre". verticalAlign midstiller eventuell tekst


const knappStyle = {
    width: "25%",
    height: "100%",
    float: "left",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "100%",

}

// når vi er på gitte siden får knappen fargen under
const linkActive = {
    color: "#FFFFFF"
}