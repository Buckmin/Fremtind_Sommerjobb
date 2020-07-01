import React from "react"
import { Link } from "gatsby"

/* ikonene til navbaren */
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillCursorFill, BsGraphDown} from "react-icons/bs"

/* 
dette er footeren med linker mellom de ulike sidene.
lager den som en komponent vi kan hente inn i de ulike sidene
*/

export default function Footer () {
    return (
        <div id="baren" style={footerStyle}>
            <BarKnapp iconName={<BsFillHouseDoorFill size={30} />} linkLink="/" />
            <BarKnapp iconName={<BsFillCursorFill size={30}/>} linkLink="/ruter" />
            <BarKnapp iconName={<BsGraphDown size={30}/>} linkLink="/tidslinje"/>
            <BarKnapp iconName={<BsFillPersonFill size={30}/>} linkLink="/profil" />
        </div>
    )
}

/* definerer BarKnapp for å kunne gjenbruke knappene
vil etterhvert legge inn ikoner
tror ikoner kan byttes ut med tekst ved {props.linkImg} */

function BarKnapp (props) {
    return (
        <div style={knappStyle}>
            <Link to={props.linkLink} activeStyle={linkActive}>
                {props.iconName}
                
            </Link>
        </div>
    )
}


/* definerer style med css */ 
const footerStyle = {
    position: "fixed",
    left: "0 auto",
    bottom: "0",
    width: "100%",
    backgroundColor: "#6F6F6F",
    height: "50px",
    padding: "20px 0px 0px 0px",
    maxWidth: "294px",
    display: "flex"
    //margin: "0 auto",

}
// padding over med textAlign under gjør ikonene midtstilt
// padding er over høyre under venstre. verticalAlign midstiller eventuell tekst
// ikon-svg er 30px, så padding over må være 50px-30px=20px

const knappStyle = {
    width: "25%",
    height: footerStyle.height,
    float: "left",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: footerStyle.height,

}

// når vi er på gitte siden får knappen fargen under
const linkActive = {
    color: "#FFFFFF"
}