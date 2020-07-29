
import React from "react"
import { getJson } from "../../getJson"


// dette er dårlig kode, bare kopiert om igjen og endret

export function VisualizedTotalStatsLS() {
    let totalStats = getJson ("totalStats") || {};
    return (
        <div id="totalStats" style={{color: "#FFC880", padding: 10, backgroundColor: "#765D4B", paddingBottom: 10}} >

            <InfoForTabell tekst1={"Totalt utslipp:"} tekst2={" g"} stats={totalStats["totalEmission"]}/>
            <InfoForTabell tekst1={"Totalt kalorier forbrent:"} tekst2={" kcal"} stats={totalStats["totalCalories"]}/>
            <InfoForTabell tekst1={"Totalt lengde reist:"} tekst2={" km"} stats={((totalStats["totalLength"])/1000).toFixed(1)}/>
            <InfoForTabell tekst1={"Totalt antall reiser:"} tekst2={" reiser"} stats={totalStats["totalTrips"]}/>
            <InfoForTabell tekst1={"Totalt tid reist:"} tekst2={" timer"} stats={((totalStats["totalTime"])/3600).toFixed(1)}/>
        
        </div>
        )
} 
function InfoForTabell (props) {
    return (
    <div id="partenDivInfoboks">
        <div id="enkeltInfoboks"  >
            <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>{props.tekst1}</p>
            <p style={{fontSize: 16, fontWeight: 600}}>{props.stats} {props.tekst2}</p>
        </div>
        <div id="skillelinje" style={{height: 1, backgroundColor: "#FFA42D"}}></div>
    </div>
    )
}