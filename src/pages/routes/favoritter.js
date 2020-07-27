import React from "react"
import AccordionJS from "../../components/AccordionJS"

export default function Favoritter () {

    const alleTurer2 = JSON.parse(localStorage.getItem("alleTurer"))

    // OBS!!! alleTurer2 må bli byttet til: const alleTurer2 = getJson("alleTurer")          !!!!!!!!!!!!!!!!!!!!!

    const cardArray = [] // array for cards/AcordionJs greiene
    const cardKeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in alleTurer2){
        if (alleTurer2[key]["favoritt"]){ // her blir kun de som er favoritter lagt til. OBS: eneste endringer fra nylige.js
            cardKeyArray.push(key)
        }

    }
    cardKeyArray.sort() // sortert på dato og reversert for å få nyeste rett under
    cardKeyArray.reverse()

    for (let i = 0; i < cardKeyArray.length; i++){
//console.log("dette er ", i, alleTurer2[cardKeyArray[i]]["til"])

    cardArray.push(<AccordionJS 
            date = {[cardKeyArray[i]]}
            fromDest = {alleTurer2[cardKeyArray[i]]["fra"]}
            toDest = {alleTurer2[cardKeyArray[i]]["til"]}
            />)
    }
    if (cardKeyArray.length === 0){
        return(
            <div>
                Oisann! Ser ikke ut til at du har noen favoritter :(
            </div>
        )
    }

    return ( // skriver ut alle greiene (komponentene) i arrayet
        <div>
            {cardArray}
        </div>
    )

}