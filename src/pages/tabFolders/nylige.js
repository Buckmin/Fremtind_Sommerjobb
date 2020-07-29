import React, { useState } from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"
import {getJson} from "../../getJson";

function sortByDate(obj) {
    const sortedObj = [] // array for cards/AcordionJs greiene
    const KeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in obj){
        KeyArray.push(key)
    }
    KeyArray.sort()
    KeyArray.reverse()

    for (let i = 0; i < KeyArray.length; i++){
        sortedObj[KeyArray[i]] = obj[KeyArray[i]]
    }
    return sortedObj
}

export default function Nylige () {

    const alleTurerKopi = getJson("alleTurer") || {};
    let alleTurerKopiSorted = sortByDate(alleTurerKopi)

    /* let [text1, setText1] = useState(true);
    console.log("før: ", text1)

    function handleChange(){
        text1 = false
        console.log('trykket')
        alert('hei')
    } */

    return (
        <div className="container">
            {Object.keys(alleTurerKopiSorted).map((dato, i) => (
                <AccordionJS 
                    key={`${dato.label}${i}`}
                    label={dato.label}
                    dato={dato} 
                    fra={alleTurerKopiSorted[dato]['fra']} 
                    til={alleTurerKopiSorted[dato]['til']} 
                    lengde={alleTurerKopiSorted[dato]['lengde']} 
                    tid={alleTurerKopiSorted[dato]['tid']} 
                    middel={alleTurerKopiSorted[dato]['middel']} 
                    CO2={alleTurerKopiSorted[dato]['CO2']} 
                    favoritt={alleTurerKopiSorted[dato]['favoritt']}
                    kcal = {alleTurerKopiSorted[dato]['kcal'] ? alleTurerKopiSorted[dato]['kcal'] : 0}
                    /* text1 = {text1}
                    onClick = {handleChange} */
                    /> ))}

            {/* <p> etter : {text1 ? 'true' : 'false'}</p> */}
        </div>
    ) 
}