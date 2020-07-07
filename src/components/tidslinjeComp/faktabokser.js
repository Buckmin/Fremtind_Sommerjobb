import React from "react"
import { ManyFunfactsDict } from "./tidslinjeData/funfacts"
import { BsArrowLeft } from "react-icons/bs"
import "../../styles/tidslinje.css"

import { formatDate } from "../tidslinjeComp/tidslinjeData/randomDateKG"





export function AlleFaktabokser ({selectedDate, totalEmission, userEmissionsSliced}) { // denne funksjonen lager et array med alle faktaboksene.
    const tidslinjePixelHoyde = totalEmission*10       // 1kg tar opp 10px
    let boksDict = ManyFunfactsDict() // kg CO2 som key, tekst(er) i array som strings
    let faktaboksArray = [] // array med faktiske faktabokser. fylles opp i for-løkka nedenfor
    let boksensYverdi = 0   // y-verdien boksen har fra toppen av diven "tidslinjen"
    let deciderNumber = 0   // blir satt til random float mellom 0,1 for å bestemme om en fact skal bli vist
    let dictTekst = ""      // funfact 
    let arrAvTekster = []   // er flere funfacts per kg CO2, for å gi variasjon
    let dagerSidenStart = 0    // for å vise dager siden en grense ble passert
    let currentDate = userEmissionsSliced[0][0]   // for å vise datoen en grense ble passert
    let emissionSumOnCurrentDate = userEmissionsSliced[0][1] // format: [dato, kg CO2 sluppet ut på dato]

    for( let i = 0; i < totalEmission && i < Object.keys(boksDict).length; i ++) { // i er antall kg CO2 slupper ut
        deciderNumber = Math.random()
        if (i > emissionSumOnCurrentDate) { // justerer dato-delen
            dagerSidenStart ++
            currentDate = userEmissionsSliced[dagerSidenStart][0]
            emissionSumOnCurrentDate = emissionSumOnCurrentDate+userEmissionsSliced[dagerSidenStart][1]
        }
        if (deciderNumber > 0.80) { // 20% sjanse for å legge ut en boks med gitt funfact
            boksensYverdi = 10*i
            if (boksDict[i][1]) { // hvis det eksisterer mer enn element [i][0]
                arrAvTekster = boksDict[i]
                 dictTekst = arrAvTekster[Math.floor(Math.random() * arrAvTekster.length)]// velger tilfeldig tekst, dersom det er flere enn en tekst per key
            }
            else {dictTekst = boksDict[i]} // når det bare er en value per key
            faktaboksArray.push(<FaktaBoks 
                    yVerdi={boksensYverdi} 
                    boksTekst={dictTekst}   // sender teksten i arrayet til boksen
                    CO2mengde={ i }
                    dagenPassert={ dagerSidenStart }
                    datoPassert={currentDate}
                    />)
            i = i + 15 // når er boks er lagt til arrayey, må de neste 15 verdiene hoppes over
        }
    }
    faktaboksArray.push( < YourTotalEmission tidslinjePixelHoyde={tidslinjePixelHoyde} totalEmission={totalEmission} selectedDate={selectedDate}/>) // legger til boks helt nederst på tidslinjen for totalt utslipp

    return (
      <div id="faktaboksenesBoks" className="div__faktaboksenesBoks" style={{height: tidslinjePixelHoyde}}>
        {faktaboksArray}
      </div>
    )
  }
  

  // dette er funksjonen for de enkelete boksene med fakta om utslipp.
  // props: tekst, mengde CO2, dato passert grense
  function FaktaBoks (props) {
    // styling på boksene i 
    return (
      <div id="faktaboks" className="div__faktaboksStyle" style ={{top: props.yVerdi}}>
        <BsArrowLeft /> 
        <span className="span__CO2tallStyle">{props.CO2mengde}</span> 
        <span className="span__kgFaktaboksStyle">kg</span>
        <div id="tekstboks" className="div__tekstboksStyle">
          <p className="p__datoStyle"> Passert på dag {props.dagenPassert}, som var {formatDate(props.datoPassert)} </p>
          <p className="p__tekstInBoksStyle">{props.boksTekst}</p>
          <p className="p__tekstInBoksStyle">{props.currentSum}</p>
        </div>
      </div>
    )
  }
  
  function YourTotalEmission ({selectedDate, totalEmission, tidslinjePixelHoyde}) { // dette er boksen nederst på tidslinjen som sier hvor mye totalutslippet vil være
    return (
      <div className="div__totalBoksStyle" style={{top: tidslinjePixelHoyde + 100}}> 
        {/* bare en pil, men nå er boksen for langt nede: <BsArrowLeft />  */}
        <span className="span__CO2tallStyle">Totalt {totalEmission}</span> 
        <span className="span__kgFaktaboksStyle">kg</span>
        <p className="p__tekstInBoksStyle"> sluppet ut gjennom reiser siden {formatDate(selectedDate)}</p>
      </div>
    )
  }