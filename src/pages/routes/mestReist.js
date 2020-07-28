import React from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"


// I VÅR POC HAR VI DROPPET Å IMPLEMENTERE SORTERING PÅ MEST REIST

export default function MestReist () {
    // OBS!!! alleTurerKopi må bli byttet til: const alleTurer2 = getJson("alleTurer")
    const alleTurerKopi = JSON.parse(localStorage.getItem("alleTurer"))

    return (
        <div className="container">
            {alleTurerKopi.map((tur,i) => (<AccordionJS tur= {tur} key = {i} />))}
         </div>
    ) 
}
