import React from "react"
import { CowIkon } from "../customIkoner"

// <p id="kildeFunfacts">Kilde: https://www.framtiden.no/gronne-tips/fritid/21-klimafotavtrykk-av-forbruket-vart.html</p>

export function OneFunfactCard(props) {
    return (
        <div id="oneFunfactCard" style={cardStyle}>
            <p style={{fontSize: 32, fontWeight: 300}}>{props.kgCO2} kg</p>
            <span style={{left: 110, top: 66, position: "absolute", width: "60%"}}>{props.factText}</span>
            {props.ikon}
        </div>
    )
}

const cardStyle = {
    width: "100%",
    height: 169,
    borderRadius: 20,
    backgroundColor: "white",
    border: "2px solid #C4C4C4",
    padding: 10,
    position: "relative",
    marginBottom: 5,
}


export function ManyFunfactCards () {
    return (
        <div id="divRundtFFcards">
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={0.75} factText="Produksjon av en halvliter øl." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={1.3} factText="Produksjon av en vannmelon." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={4} factText="Produksjon av en cheeseburger." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={14} factText="Produksjon av 1 kg smør." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={22.7} factText="Produksjon av 1kg storfekjøtt." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={117} factText="Produksjon av en gullring." />
      <OneFunfactCard ikon={<CowIkon/>} kgCO2={15000} factText="Produksjon av en stor elbil." />

        </div>
    )
}