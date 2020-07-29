import React from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"
import {getJson} from "../../getJson";


export default function Favoritter () {
    const alleTurerKopi = getJson("alleTurer") || {};
    //let alleTurerKopi = sortByFav(alleTurer2)

    return (
        <div className="container">
            {Object.keys(alleTurerKopi).map((dato, i) => (
                
                <AccordionJS 
                    key={`${dato.label}${i}`}
                    label={dato.label} 
                    dato={dato} 
                    fra={alleTurerKopi[dato]['fra']} 
                    til={alleTurerKopi[dato]['til']} 
                    lengde={alleTurerKopi[dato]['lengde']} 
                    tid={alleTurerKopi[dato]['tid']} 
                    middel={alleTurerKopi[dato]['middel']} 
                    CO2={alleTurerKopi[dato]['CO2']} 
                    favoritt={alleTurerKopi[dato]['favoritt']}
                    kcal = {alleTurerKopi[dato]['kcal'] ? alleTurerKopi[dato]['kcal'] : 0}
                /> ))}
         </div>
    ) 
}
