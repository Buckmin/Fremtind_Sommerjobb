import React from "react"
import { Link } from "gatsby"

// installert circular progression bar. https://github.com/kevinsqi/react-circular-progressbar. 
// demoer på installert circular progression bar: https://codesandbox.io/s/vymm4oln6y?file=/index.js
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsPencil } from "react-icons/bs"

// lokal styling av hjulet
import "../../styles/hjulet.css"


export function HjuletTotalCO2 ({totalEmission, userGoalTotCO2}) { 
    let totalEmissionStr = (totalEmission).toFixed(1)
    let fontStrArr = [20, 20, 20, 80, 70, 60, 50, 40, 30, 20] // array for fontSize på totalEmission
    
    return (
        <div id="heleDivRundtHjulet" className="div__heleDivRundtHjulet">
            <p>Mitt CO2-utslipp</p>
            <div id="rundtHjulet" className="div__rundtHjulet">
                <CircularProgressbarWithChildren
                    value={totalEmissionStr} 
                    styles={buildStyles(
                        {pathColor: "#50E68C", 

                        textColor: "#000000" }
                    )}> 
                    <div> 
                        <span style={{fontSize: fontStrArr[totalEmissionStr.length], fontWeight: 200}}>{totalEmissionStr}</span>
                        <p style={{marginTop: 0, marginBottom: 0, }}>kg</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
                    <p>av {userGoalTotCO2}kg  { <IconLinkToGoals />}</p>
        </div>
    )
}


function IconLinkToGoals () {    // OBS! Per nå går denne kun til 404, ikke en page hvor brukeren kan sette seg et mål
    return (
        <Link to="/404" style={{color: "#000AFA"}}> 
            <BsPencil/>
        </Link>
    )
}