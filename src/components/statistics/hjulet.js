import React from "react"
import { Link } from "gatsby"

// installert circular progression bar. https://github.com/kevinsqi/react-circular-progressbar 
// demoer på installert circular progression bar: https://codesandbox.io/s/vymm4oln6y?file=/index.js
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsPencil } from "react-icons/bs"

// lokal styling av hjulet
import "../../styles/hjulet.css"


export function HjuletTotalCO2 ({theEmission, theGoal}) { 
    
    let theEmissionStr = (theEmission).toFixed(1)
    let fontStrArr = [20, 20, 20, 80, 70, 60, 50, 40, 30, 20] // array for fontSize på theEmission
    
    return (
        <div id="heleDivRundtHjulet" className="div__heleDivRundtHjulet">
            <p>Mitt CO2-utslipp</p>
            <div id="rundtHjulet" className="div__rundtHjulet">
                <CircularProgressbarWithChildren
                    value={100*theEmission/theGoal} 
                    styles={buildStyles(
                        {pathColor: theEmission > theGoal ? "#90352f" : "#0A3166", 

                        textColor: "#000000" }
                    )}> 
                    <div> 
                        <span style={{fontSize: fontStrArr[theEmissionStr.length], fontWeight: 200}}>{theEmissionStr}</span>
                        <p style={{marginTop: 0, marginBottom: 0, }}>g</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
                    <p>av {theGoal}g  { <IconLinkToGoals />}</p>
        </div>
    )
}


function IconLinkToGoals () {    // OBS! Per nå går denne kun til dev-page, ikke en page hvor brukeren kan sette seg et mål
    return (
        <Link to="/settegrensen" style={{color: "#000AFA"}}> 
            <BsPencil/>
        </Link>
    )
}