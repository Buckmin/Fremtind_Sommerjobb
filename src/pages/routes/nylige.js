import React from "react"
import AccordionJS from "../../components/mineReiser/AccordionJS"

function sortByDate(arr) {
    const cardArray = [] // array for cards/AcordionJs greiene
    const cardKeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in arr){
        cardKeyArray.push(key)
    }
    cardKeyArray.sort() // sortert på dato og reversert for å få nyeste rett under
    return cardKeyArray.reverse()
}


export default function Nylige () {
    // OBS!!! alleTurerKopi må bli byttet til: const alleTurer2 = getJson("alleTurer")
    const alleTurerKopi = JSON.parse(localStorage.getItem("alleTurer"))
    alleTurerKopi = sortByDate(alleTurerKopi)

    return (
        <div className="container">
            {alleTurerKopi.map((tur,i) => (<AccordionJS tur= {tur} key = {i} />))}
        </div>
    ) 
}
