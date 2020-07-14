
import React, {useState} from "react" // useState er også bare for testing av knapp §, https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook
import ProgressBar from 'react-bootstrap/ProgressBar' // https://react-bootstrap.github.io/components/progress/
import { MdDirectionsWalk, MdDirectionsBike, MdTrain, MdDirectionsBus, MdDirectionsCar } from "react-icons/md";

import 'bootstrap/dist/css/bootstrap.min.css' // styling på alle bootstrap-greier. Uten denne blir de kjedelige/borte fra skjermen
import "../../styles/progressBars.css"

export function TravelProgressBarsKG () { // ta inn dato/tidsperiode? ta inn array(dict?) med utslipp
    let walkEmission = 10
    let bikeEmission = 20
    let trainEmission = 15
    let busEmission = 35
    let carEmission = 75
    let sumEmissions = walkEmission + bikeEmission + carEmission + busEmission + trainEmission
    // disse variablene burde være i et array, men fordi det er usikkert hvordan data inn blir seende ut,
    // så er de per denne iterasjonen kun satt som konstanter med navn.
    // er enkelt å bytte ut og legge inn disse som props i return-callet under.
    let iconSize = 24 // størrelsen på ikonene

    return (
        <div id="theProgressBars" className="div__theProgressBars">
            <OneBarWithIconAndTekst id="walk" IconName={<MdDirectionsWalk size={iconSize} />} CO2number={walkEmission} sumEmissions={sumEmissions}/>
            <OneBarWithIconAndTekst id="bike" IconName={<MdDirectionsBike size={iconSize} />} CO2number={bikeEmission} sumEmissions={sumEmissions}/>
            <OneBarWithIconAndTekst id="train" IconName={<MdTrain size={iconSize} />} CO2number={trainEmission} sumEmissions={sumEmissions}/>
            <OneBarWithIconAndTekst id="bus" IconName={<MdDirectionsBus size={iconSize} />} CO2number={busEmission} sumEmissions={sumEmissions}/>
            <OneBarWithIconAndTekst id="car" IconName={<MdDirectionsCar size={iconSize} />} CO2number={carEmission} sumEmissions={sumEmissions}/>
        </div>
    )
}

function OneBarWithIconAndTekst (props) {
    let andelAvBar = ((props.CO2number/props.sumEmissions)*100).toFixed(1)
    return(
        <div id="enBarMedIkonOgTekst" className="div__enBarMedIkonOgTekst">
            {props.IconName}
            <span className="span__tekstOverBaren"> {props.CO2number} kg </span>
            <div id="bareBaren" className="div__bareBaren">
                <ProgressBar animated striped variant="info" now={andelAvBar}/>
            </div>
        </div>
    )
}

// _________________________________________________________________________________________
// DETTE ER BAR NUMMER TO, den med prosentvis fordeling av antall trips. Denne justerer seg også
// OBS! denne funksjonen er nå ganske avhengig av skjermstørrelsen

export function TravelProgressBarsPercentage () {
    // let walkTrips = 20 // fjern denne kommentaren når knappen "Øk Walks" blir fjernet. kommenter da ut alt markert med §
    const [walkTrips, incrementWalks] = useState(10) // bare for å vise/teste §
    let bikeTrips = 5
    let trainTrips = 10
    let busTrips = 9
    let carTrips = 15
    let sumTrips = walkTrips + bikeTrips + trainTrips + busTrips + carTrips
    let iconSize = 24 // størrelsen på ikonene

    return (
        <div id="theProgressBars" className="div__theProgressBarsPercent">
        <OneBarWithMovingIconAndTextPercentage id="walk" IconName={<MdDirectionsWalk size={iconSize} />} antallTrips={walkTrips} sumTrips={sumTrips}/>
        <OneBarWithMovingIconAndTextPercentage id="bike" IconName={<MdDirectionsBike size={iconSize} />} antallTrips={bikeTrips} sumTrips={sumTrips}/>
        <OneBarWithMovingIconAndTextPercentage id="train" IconName={<MdTrain size={iconSize} />} antallTrips={trainTrips} sumTrips={sumTrips}/>
        <OneBarWithMovingIconAndTextPercentage id="bus" IconName={<MdDirectionsBus size={iconSize} />} antallTrips={busTrips} sumTrips={sumTrips}/>
        <OneBarWithMovingIconAndTextPercentage id="car" IconName={<MdDirectionsCar size={iconSize} />} antallTrips={carTrips} sumTrips={sumTrips}/>
        
        {/* Button nedenfor er bare for testing!! fjer den i ferdig versjon*/}
        <button onClick={() => incrementWalks(walkTrips+1)} > Øk walks </button> {/* hele denne linjen § */}
        <p>
            øk walks knappen er bare midlertidig for å vise hvordan disse barene endrer seg. 
            OBS! bruker (..tall..).toFixed(1) for å få fine tall, bare ett komma. 
            Det gjør at det kanskje ikke blir 100%. 
        </p>{/* fjern hele denne paragrafen § */}
    </div>
    )
}


function OneBarWithMovingIconAndTextPercentage (props) {
    let andelAvBar = ((props.antallTrips/props.sumTrips)*100).toFixed(1) // gir andelen som skal være skravert. floor for fint tall
    let leftAdjust = 350*andelAvBar/100 // 350 er width på diven rundt barene.
    let divWithIconAndPercentage = 90
    if (leftAdjust > 350 - divWithIconAndPercentage) { leftAdjust = 350 - divWithIconAndPercentage} // nå er dette ganske låst til at barene ikke blir størren enn 350px wide
    let bevegendeIkonOgTekstStyle = { width: divWithIconAndPercentage, left: leftAdjust, position: "relative" } // style her justerer s.a. det blir nice
    return (
        <div id="enBarMedIkonOgTekst" className="div__enBarMedIkonOgTekst">
            <div id="boksRundtBevegelig"style={{width: "100%"}}>
                <div id="bevegendeIkonOgTekst" className="div__bevegendeIkonOgTekst" style = {bevegendeIkonOgTekstStyle}>
                    {props.IconName} <span > {andelAvBar} % </span>
                </div>
            </div>
            <ProgressBar animated variant="success" now={andelAvBar} />
        </div>
    )
}