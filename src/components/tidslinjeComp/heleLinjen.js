// denne fila ...

import React from "react"
import "../../styles/tidslinje.css"

export function HeleLinjen ({totalEmission}) { // denne funksjonen returnerer et array med så mange LinjeElement tidslinjen skal være
    let elementArray = []
    let colorVariableNumber = 0
    for (var i = 0; i < totalEmission; i+= 0.1){
      colorVariableNumber = Math.floor((i/totalEmission)*10)
      if (colorVariableNumber < 4) { elementArray.push(<LinjeElement elementfargen = "green"/>)}
      if (colorVariableNumber >= 4 && colorVariableNumber < 8) {elementArray.push(<LinjeElement elementfargen = "orange"/>)}
      if (colorVariableNumber >= 8) {elementArray.push(<LinjeElement elementfargen = "red"/>)}
      // if-setningene her gjør at fargen endrer seg ned på linjen. fargen på boksene endrer seg ikke da :(
      }
    return( // dynamisk høyde, resten av style er i tidslinjen.css
      <div id="linjen" className="div__hele-linjen" style={{height: elementArray.length}}> 
        {elementArray}
      </div>
    )
  }
  
  
  // her er selve elementene i linjen, brutt ned i små element som blir rendret utfra mengden utslipp.
  // B: tanken min er å ha mange små element, feks 1px for 0,1kg CO2, og så legges de under hverandre
function LinjeElement (props) { // denne funksjonen brukes bare lokalt i denne filen, ingen export
  let fargen = props.elementfargen
  return ( <div className="div__ett-linjeelement" style={{backgroundColor: fargen}}></div> ) // returnerer ett element, 1px = 0.1kg til tidslinjen
} // har style her for å få dynamisk farge på linjen
  