import React from "react"
import AccordionJS from "../../components/AccordionJS"

/* let alleTurer= [
    {'2020.04.23-12:12' : {til: 'TilAdresse1', fra: 'fraAdresse1', tid: 20, lengde:37, middel: 'gå', CO2: 0, kal: 3456}},
    {'2020.03.23-12:12' : {til: 'TilAdresse2', fra: 'fraAdresse2', tid: 45, lengde:34, middel: 'sykkel', CO2: 0, kal: 386}},
    {'2020.03.26-12:42' : {til: 'TilAdresse3', fra: 'fraAdresse3', tid: 93, lengde:57, middel: 'bil', CO2: 456, kal: 0}},
    {'2020.06.26-12:42' : {til: 'TilAdresse4', fra: 'fraAdresse4', tid: 27, lengde:39, middel: 'kollektivt', CO2: 2345, kal: 0}},
]; */

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
    const alleTurerKopi = JSON.parse(localStorage.getItem("alleTurer"))
    alleTurerKopi = sortByDate(alleTurerKopi)

    return (
        <div className="container">
            {/* {alleTurer.map((tur,i) => (<AccordionJS tur= {tur} key = {i} />))} */}
            {alleTurerKopi.map((tur,i) => (<AccordionJS tur= {tur} key = {i} />))}
        </div>
    ) 
}
