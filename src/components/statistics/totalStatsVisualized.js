import React from "react"
import { getJson } from "../../getJson"


export function VisualizedTotalStatsLS() {
    let totalStats = getJson ("totalStats") || {};
    return (
        <div id="hovedkontainer" style={{color: "#FFC880", padding: 10, backgroundColor: "#765D4B"}}>
            <div id="enkeltInfoboks"  >
                <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>Totalt utslipp:</p>
                <p style={{fontSize: 16, fontWeight: 600}}>{totalStats["totalEmission"]} g</p>
            </div>
            <div id="skillelinje" style={{height: 1, backgroundColor: "#FFA42D"}}></div>

            <div id="enkeltInfoboks">
                <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>Totalt kalorier forbrent:</p>
                <p style={{fontSize: 16, fontWeight: 600}}>{totalStats["totalCalories"]} kcal</p>
            </div>
            <div id="skillelinje" style={{height: 1, backgroundColor: "#FFA42D"}}></div>


            <div id="enkeltInfoboks"  >
                <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>Totalt lengde reist:</p>
                <p style={{fontSize: 16, fontWeight: 600}}>{((totalStats["totalLength"])/1000).toFixed(1)} km</p>
            </div>
            <div id="skillelinje" style={{height: 1, backgroundColor: "#FFA42D"}}></div>

            <div id="enkeltInfoboks"  >
                <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>Totalt antall reiser:</p>
                <p style={{fontSize: 16, fontWeight: 600}}>{totalStats["totalTrips"]} reiser</p>
            </div>
            <div id="skillelinje" style={{height: 1, backgroundColor: "#FFA42D"}}></div>

            <div id="enkeltInfoboks"  >
                <p style={{fontSize: 10, fontWeight: 300, marginBlockEnd: 0}}>Totalt tid reist:</p>
                <p style={{fontSize: 16, fontWeight: 600}}>{((totalStats["totalTime"])/3600).toFixed(1)} timer</p>
            </div>
        </div>
    )
} 