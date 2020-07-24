import React from "react"
import AccordionJS from "../../components/AccordionJS"


export default function Nylige () {
    let alleTurer= {}
    alleTurer['2020.03.23-12:12'] = {til: 'dette er en til test 1', fra: 'dette er fra test 1'}
    alleTurer['2020.04.23-12:12'] = {til: 'dette er en til test 2', fra: 'dette er fra test 2'}
    alleTurer['2020.03.26-12:42'] = {til: 'dette er en til test 3', fra: 'dette er fra test 3'}
    
    let tilTest = alleTurer['2020.03.23-12:12']['til']
    let fraTest = alleTurer['2020.03.23-12:12']['fra']
    let keysTest = (Object.keys(alleTurer)).sort()
    console.log(keysTest[1])
    console.log(alleTurer[keysTest[1]])
    

    return (
        <div>
            <AccordionJS 
                date = {keysTest[0]}
                fromDest= {tilTest}
                toDest= {fraTest}
            />

        </div>
    )

}