import React from "react"

import Header from "../components/header"
import Footer from "../components/Footer"

import { TextInput, TextArea, BaseInputField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";

import '~@entur/form/dist/styles.css';
import { TextField } from '@entur/form';

import '~@entur/chip/dist/styles.css';
import { ChoiceChipGroup } from '@entur/chip';
import { ChoiceChip } from '@entur/chip';

export default function Reiseplanlegger() {
    return ( 
      <div id="hovedkontainer" style={hovedStyle}>
        <Header headerText="Reiseplanlegger"/>
        <div>
            Hei
        </div>
        <Footer />
      </div>
    )
  }

  
  const hovedStyle = {
    margin: "0 auto"
  };
  