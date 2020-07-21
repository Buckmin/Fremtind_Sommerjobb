import React from "react"

export default function Header (props) {
    return (
        <div style={headerStyle}>
            <h1>{props.headerText}</h1>
        </div>
    )
}

const headerStyle = {
    margin: "7px",
    fontFamily: "Fremtind Grotesk Display",
    marginBottom: "0.5cm",
    marginTop: "2cm"
  };