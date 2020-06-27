/* tidslinjen. Kaja og Brynjar */
import React from "react"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import MyFooter from "../components/footer"

// importering av datepicker
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";


// her er selve funksjonen som kjører komponentene ut på skjermen
// B: ikke egt sikker på "export default", det var i tutorialen
export default function Home() {
  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="tidslinje"/> 
      <MyDatePicker boolValues={true} />
      <MyFooter />
    </div>
  )
}

const hovedStyle = {
  maxWidth: "500px",
  margin: "0 auto"
};



export const MyDatePicker = ({ boolValues, choiceValues }) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    //const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    //const logDate = (message: "en string") => (date: Date | undefined) => console.log(message, date);

    return (
        <DatePicker
            initialDate={new Date(new Date().setFullYear(2020,0,1))} // 1. januar 2020
            //initialDate={new Date(new Date().setFullYear(new Date().getFullYear()))} // velger datoen i dag over
            label="Startsdato for tidslinjen"
            variant="small"
            extended={true}
            forceCompact={true}
            inverted={boolValues && boolValues["Invertert"]}
            //variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            //onFocus={logDate("hello from onFocus")}
            //onBlur={logDate("hello from onBlur")}
            //onChange={logDate("hello from onChange")}
        />
    );
};