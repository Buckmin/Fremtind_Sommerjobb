import React from "react"
import { Link } from "gatsby"

/* ikonene til navbaren */
import { HjemIkon, ReiseplanleggerIkon, MineReiserIkon, MinProfilIkon } from "./customIkoner"

/* 
dette er footeren med linker mellom de ulike sidene.
lager den som en komponent vi kan hente inn i de ulike sidene
*/

export default function Footer (props) {
    return (
        <div>
            <div id="skillelinje" style={skillelinjeStyle}></div>
            <div id="baren" style={footerStyle}>
                <BarKnapp iconName={<HjemIkon page={props.page}  />} tekst="Hjem" linkLink="/" />
                <BarKnapp iconName={<ReiseplanleggerIkon page={props.page}/>} tekst="Reiseplanlegger" linkLink="/reiseplanlegger" />
                <BarKnapp iconName={<MineReiserIkon page={props.page}/>} tekst="Mine reiser" linkLink="/ruter"/>
                <BarKnapp iconName={<MinProfilIkon page={props.page}/>} tekst="Min profil" linkLink="/profil" />
            </div>
    </div>
    )
}


function BarKnapp (props) {
    return (
        <div id="enkeltknapp" style={knappStyle}>
            <Link to={props.linkLink} activeStyle={linkActive} style={{color: "#999999"}} >
                {props.iconName}
                <p style={ikonTekstStyle}>{props.tekst}</p>
            </Link>
        </div>
    )
}

const ikonTekstStyle = {
    fontSize: 10,
}

const skillelinjeStyle = { // fikk ikke til å fikse at denne linjen kun er på skjermen, så det ser litt teit ut at width: 100%
    height: 2, 
    width: "100%", 
    backgroundColor: "#EBEBEB",
    position: "fixed",
    left: 0,
    bottom: 110 - 2, // 110 - dennes height
}

/* definerer style med css */ 
const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: 343,
    //borderTop: "3px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    height: 110 - skillelinjeStyle.height,
    padding: "15px 0px 15px 0px",
}
// padding er "over høyre under venstre". verticalAlign midstiller eventuell tekst


const knappStyle = {
    width: "25%",
    height: "100%",
    float: "left",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "100%",

}

// når vi er på gitte siden får teksten fargen under
const linkActive = {
    color: "#000000"
}