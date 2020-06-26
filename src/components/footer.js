import React from "react"
import { Link } from "gatsby"

/* ikonene til navbaren */
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillCursorFill, BsGraphDown} from "react-icons/bs"

/* 
dette er footeren med linker mellom de ulike sidene.
lager den som en komponent vi kan hente inn i de ulike sidene
*/

export default function MyFooter () {
    return (
        <div id="baren" style={footerStyle}>
            <BarKnapp iconName={BsFillHouseDoorFill} linkLink="/" />
            <BarKnapp linkText="Ruter" linkLink="/ruter" />
            <BarKnapp linkText="Tidslinje" linkLink="/tidslinje"/>
            <BarKnapp linkText="Profil" linkLink="/profil" />
        </div>
    )
}

/* definerer BarKnapp for å kunne gjenbruke knappene
vil etterhvert legge inn ikoner
tror ikoner kan byttes ut med tekst ved {props.linkImg} */

function BarKnapp (props) {
    return (
        <div style={knappStyle}>
            <Link to={props.linkLink}>
                {props.linkText}
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
    height: "60px"
}

const knappStyle = {
    width: "25%",
    height: footerStyle.height,
    float: "left",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: footerStyle.height
}