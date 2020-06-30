import React from "react"

import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import "@fremtind/jkl-accordion/accordion.min.css";

// ER: future component for our route accordion, have to make it work first.
// Here we can include all data that is needed in each route (CO2-bar, general details, button for details, buttons for switching transport)
// Not sure if that will work in Jøkul since it is quite difficult to customize existing components, especially when we have to add other components
// Might be better to design our own

export default function RouteAccordion() {
    <Accordion>
        <AccordionItem title="Accordion #1">Her er det som går inni accordion. Det kan være så mangt.</AccordionItem>
        <AccordionItem title="Accordion #2">Her er annet innhold til accordion.</AccordionItem>
    </Accordion>
}