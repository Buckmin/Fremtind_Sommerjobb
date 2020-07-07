import React, { useState } from "react"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export var startDato = new Date("2020-06-01")

export function Datovelger (){
    const [selectedDate, setSelectedDate] = useState (startDato)
    

    return (
        <DatePicker
            selected={selectedDate}

            onChange={date => setSelectedDate(date)} //only when value has changed
            //onSelect={updateStartDato(selectedDate)}
            dateFormat="yyyy-MM-dd"
        />
    )
}

