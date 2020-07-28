// B: mye av koden her er hentet herfra: https://react-bootstrap.github.io/components/buttons/#checkbox--radio

import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export function ToggleButtonsSorterEtter({sortering, onChange}) {
  
    const radios = [
      { name: 'Nylig',   value: 'Nylig' },
      { name: 'Mest Reist',   value: 'Mest Reist' },
      { name: 'Favoritter', value: 'Favoritter' },

    ];
    return (
        <div id="knappene" style={{textAlign: "center"}}>
        <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={sortering === radio.value ? "dark" : "secondary"}
              name="radio"
              value={radio.value}
              checked={sortering === radio.value}
              onChange={onChange}

            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <br />

      </div>
      
    );
  }





/*
// dette er bruk av komponentene for valg av tidsperiode, fremkomstmiddel

  // let userGoalTotCO2 = userGoals ? userGoals["totalGoal"] : -1; // denne må komme fra en annen side eller noe sånt
  // let totalEmission = emissionsBetweenDaysLS(new Date("2020-01-01"), new Date()); // denne må regnes ut eller hentes ut fra et annet sted

  // const [periodeDUMÅT, setRadioValuePeriodeDUMÅT] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [periodeDUMÅ, setRadioValuePeriodeDUMÅ] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [periodeDUM, setRadioValuePeriodeDUM] = useState("Dag"); // denne må brukes for ToggleButtonsPeriode, periodevelger. da er 'Dag' standardverdien
  // const [middel, setRadioValueMiddel] = useState("Gå"); // en del av fremkomstmiddelknapper
  // const [sortering, setRadioValueSortering] = useState("Nylig"); // en del av fremkomstmiddelknapper

*/



/*       // viser hvordan disse skal bli brukt. trenger hooks deklarert litt lenger opp i fila

      <ToggleButtonsSorterEtter
        sortering={sortering}
        onChange={(e) => setRadioValueSortering(e.currentTarget.value)}
      />
      <h5>Fremkomstmiddel valgt: {sortering} </h5>
      <ToggleButtonsFremkomstmiddel
        middel={middel}
        onChange={(e) => setRadioValueMiddel(e.currentTarget.value)}
      />
      <h5>Fremkomstmiddel valgt: {middel} </h5>

      <ToggleButtonsPeriodeDUMÅT periodeDUMÅT={periodeDUMÅT}
        onChange={(e) => setRadioValuePeriodeDUMÅT(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUMÅT}</h5>
      <ToggleButtonsPeriodeDUMÅ
        periodeDUMÅ={periodeDUMÅ}
        onChange={(e) => setRadioValuePeriodeDUMÅ(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUMÅ}</h5>
      <ToggleButtonsPeriodeDUM
        periodeDUM={periodeDUM}
        onChange={(e) => setRadioValuePeriodeDUM(e.currentTarget.value)}
      />{" "}
      <h5>periode valgt: {periodeDUM}</h5>
      <HjuletTotalCO2
        theEmission={totalEmission}
        theGoal={userGoalTotCO2}
      />
      <TravelProgressBarsKG />
      <LoremIpsum />
      <TravelProgressBarsPercentage /> 
      */
