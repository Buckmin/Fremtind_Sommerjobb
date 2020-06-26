import React from "react"
import { Link } from "gatsby"

/* 
dette er footeren med linker mellom de ulike sidene.
lager den som en komponent vi kan hente inn i de ulike sidene
*/

export default function MyFooter () {
    return (
        <div id="baren" style={footerStyle}>
            noe
        </div>
    )
}



/* definerer style med css */ 

const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "grey"
}