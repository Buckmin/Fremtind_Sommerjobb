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
