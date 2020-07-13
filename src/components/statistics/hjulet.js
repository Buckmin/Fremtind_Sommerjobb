import React from "react"

// installert circular progression bar. https://github.com/kevinsqi/react-circular-progressbar. 
// demoer på installert circular progression bar: https://codesandbox.io/s/vymm4oln6y?file=/index.js
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// lokal styling av hjulet
import "../../styles/hjulet.css"


export function HjuletTotalCO2 () { // må ta inn: totalEmission og userGoalTotCO2
    let totalEmission = 69
    let userGoalTotCO2 = 100
    
    return (
        <div id="rundtHjulet" className="div__rundtHjulet">
            <CircularProgressbar value={totalEmission} text={`${totalEmission}kg`} styles={buildStyles({pathColor: "#50E68C", textSize: 15, textColor: "#000000" })}/> 
            <p>Av {userGoalTotCO2} kg CO2</p>
        </div>
    )
}