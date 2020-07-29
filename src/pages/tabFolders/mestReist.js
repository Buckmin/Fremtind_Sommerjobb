import React from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"
import {getJson} from "../../getJson";

// I VÅR POC HAR VI DROPPET Å IMPLEMENTERE SORTERING PÅ MEST REIST

export default function MestReist () {
    const alleTurerKopi = getJson("alleTurer")

    return (
        <div className="container">
            {Object.keys(alleTurerKopi).map((dato, i) => (
                
                <AccordionJS 
                    key={i} 
                    dato={dato} 
                    fra={alleTurerKopi[dato]['fra']} 
                    til={alleTurerKopi[dato]['til']} 
                    lengde={alleTurerKopi[dato]['lengde']} 
                    tid={alleTurerKopi[dato]['tid']} 
                    middel={alleTurerKopi[dato]['middel']} 
                    CO2={alleTurerKopi[dato]['CO2']} 
                    favoritt={alleTurerKopi[dato]['favoritt']}
                /> ))}
         </div>
    ) 
}
