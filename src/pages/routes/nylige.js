import React from "react"
import AccordionJS from "../../components/AccordionJS"

export default function Nylige () {
    return (
        <div>
            <AccordionJS 
                title="test - nylige" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Hammersborggata 2"
            />
            <AccordionJS 
                title="Hjem - Jobb" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Hammersborggata 2"
            />
            <AccordionJS 
                title="Jobb - Hjem" 
                fromDest="Hammersborggata 2"
                toDest="Henrik Ibsens gate 1"
            />
            <AccordionJS 
                title="Hjem - Barnehagen" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Damstredet 1"
            />
            <AccordionJS 
                title="Barnehagen - Hjem" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            />
        </div>
    )

}