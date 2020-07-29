import React from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"
import {getJson} from "../../getJson";

function sortByDate(arr) {
    const sortedArray = [] // array for cards/AcordionJs greiene
    const cardKeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in arr){
        cardKeyArray.push(key)
    }
    cardKeyArray.sort() // sortert på dato og reversert for å få nyeste rett under
    cardKeyArray.reverse()

    for (let i = 0; i < cardKeyArray.length; i++){
        sortedArray.push(arr[i])
    }
    return sortedArray
}


export default function Nylige () {
    const alleTurerKopi = getJson("alleTurer") || {};
    //let alleTurerKopi = sortByDate(alleTurer2)

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