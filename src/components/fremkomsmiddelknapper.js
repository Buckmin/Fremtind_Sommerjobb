// B: mye av koden her er hentet herfra: https://react-bootstrap.github.io/components/buttons/#checkbox--radio

import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { MdDirectionsWalk, MdDirectionsBike, MdTrain, MdDirectionsCar } from "react-icons/md"; // ikonene


export function ToggleButtonsFremkomstmiddel({middel, onChange}) {
    let iconSize = 20
    const radios = [
      { name: <MdDirectionsWalk size={iconSize} />,   value: 'Gå' },
      { name: <MdDirectionsBike size={iconSize} />,   value: 'Sykkel' },
      { name: <MdTrain size={iconSize} />,            value: 'Kollektivt' },
      { name: <MdDirectionsCar size={iconSize} />,    value: 'Bil' },

    ];
    return (
        <div id="knappene" style={{textAlign: "center"}}>
        <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={middel === radio.value ? "dark" : "secondary"}
              name="radio"
              value={radio.value}
              checked={middel === radio.value}
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
