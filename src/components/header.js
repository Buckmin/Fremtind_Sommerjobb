import React from "react"
import { FremtindLogoIkon } from "./customIkoner";

export default function Header (props) {
    if (props.headerLogo === true){
        return(
            <div id="headeren" style={headerStyle}>
                <span style={{float: "right"}}> {<FremtindLogoIkon resize={true} newWidth={80}/>} </span>
                <h1>{props.headerText}  </h1> 
            </div>
            
        )
    }
    else {
        return (
            <div id="headeren" style={headerStyle}>
                <h1>{props.headerText}</h1>
            </div>
        )
}
}

const headerStyle = {
    margin: "0 auto",
    fontFamily: "Fremtind Grotesk Display",
    marginBottom: "0.5cm",
    marginTop: "2cm"
  };