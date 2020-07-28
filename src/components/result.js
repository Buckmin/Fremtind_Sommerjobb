import React from "react"
import "../styles/result.css"

export default function Results(props) {
    let emit = parseFloat(props.myEmission);
    let emitRounded = emit.toPrecision(4);
    console.log(emitRounded)

    return(
        <div>
            <p className = 'resultprint'>Ved å kjøre denne strekningen kommer du til å slippe ut </p>
            <p className = 'co2'> {emitRounded} kg CO<sub>2</sub></p>
        </div>
    )
    
}