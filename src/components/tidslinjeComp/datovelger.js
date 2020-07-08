import React from "react"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export function Datovelger ({onChange, selectedDate}){
    //const [selectedDate, setSelectedDate] = useState (startDato)

    // må legge inn tidligste mulige dato!
    
    return (
        <DatePicker
            selected={selectedDate}

            onChange={onChange} //only when value has changed
            //onSelect={updateStartDato(selectedDate)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date("2020-01-01")}
            maxDate={new Date("2020-12-31")}
        />
    )
}

