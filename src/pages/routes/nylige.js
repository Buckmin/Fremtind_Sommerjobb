import React from "react"
import AccordionJS from "../../components/AccordionJS"


export default function Nylige () {
    // Gamle greier:
    // let alleTurer = {}
    // alleTurer['2020.03.23-12:12'] = {til: 'dette er en til test 1', fra: 'dette er fra test 1'}
    // alleTurer['2020.04.23-12:12'] = {til: 'dette er en til test 2', fra: 'dette er fra test 2'}
    // alleTurer['2020.03.26-12:42'] = {til: 'dette er en til test 3', fra: 'dette er fra test 3'}
    
    // let tilTest = alleTurer['2020.03.23-12:12']['til']
    // let fraTest = alleTurer['2020.03.23-12:12']['fra']
    // let keysTest = (Object.keys(alleTurer)).sort()
    // console.log(keysTest[1])
    // console.log(alleTurer[keysTest[1]])

    const alleTurer2 = JSON.parse(localStorage.getItem("alleTurer"))

    // OBS!!! alleTurer2 må bli byttet til: const alleTurer2 = getJson("alleTurer")          !!!!!!!!!!!!!!!!!!!!!

    const cardArray = [] // array for cards/AcordionJs greiene
    const cardKeyArray = [] // array kun for key i dict alleTurer for å få sortering
    
    for (const key in alleTurer2){
        cardKeyArray.push(key)
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

    return ( // skriver ut alle greiene (komponentene) i arrayet
        <div>
            {cardArray}
        </div>
    )

}
