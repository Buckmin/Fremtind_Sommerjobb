// B: mye av koden her er hentet herfra: https://react-bootstrap.github.io/components/buttons/#checkbox--radio

import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

// her er det knapper for DUM og DUMÅ

// DUMÅ = dag, uke, måned, år
export function ToggleButtonsPeriodeDUMÅ({periodeDUMÅ, onChange}) {
  
    const radios = [
      { name: 'Dag',   value: 'Dag' },
      { name: 'Uke',   value: 'Uke' },
      { name: 'Måned', value: 'Måned' },
      { name: 'År',    value: 'År' },

    ];
    return (
        <div id="knappene" style={{textAlign: "center"}}>
        <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={periodeDUMÅ === radio.value ? "dark" : "secondary"}
              name="radio"
              value={radio.value}
              checked={periodeDUMÅ === radio.value}
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



// DUM = dag, uke, måned
export function ToggleButtonsPeriodeDUM({periodeDUM, onChange}) {
  
  const radios = [
    { name: 'Dag',   value: 'Dag' },
    { name: 'Uke',   value: 'Uke' },
    { name: 'Måned', value: 'Måned' },

  ];
  return (
      <div id="knappene" style={{textAlign: "center"}}>
      <br />
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant={periodeDUM === radio.value ? "dark" : "secondary"}
            name="radio"
            value={radio.value}
            checked={periodeDUM === radio.value}
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