import React from "react"
import AccordionJS from "../../components/AccordionJS"

function sortByFav(arr) {
    const cardArray = [] // array for cards/AcordionJs greiene
    const cardKeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in arr){
        if (arr[key]["favoritt"]){ // her blir kun de som er favoritter lagt til. OBS: eneste endringer fra nylige.js
            cardKeyArray.push(key)
        }

    }
    cardKeyArray.sort() // sortert på dato og reversert for å få nyeste rett under
    return cardKeyArray.reverse()
}

export default function Favoritter () {
    const alleTurer2 = JSON.parse(localStorage.getItem("alleTurer"))
    alleTurer2 = sortByFav(alleTurer2)

    return (
        <div className="container">
            {alleTurer2.map((tur,i) => (<AccordionJS tur= {tur} key = {i} />))}
        </div>
    ) 
}
