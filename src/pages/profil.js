import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/profil.css";
import {
  formatDate,
  dagerSiden,
} from "../components/tidslinjeComp/tidslinjeData/randomDateKG";
import { getJson } from "../getJson";

// lagre til lokal fil: setJson({KEY}, {VARIABEL})
// hente ut lokal fil: {VARIABEL} = getJson({KEY})

export default function Home() {
  let personlia2 = getJson("personlia") || {};

  // const personliaKeys = ["Fornavn", "Mellomnavn", "Etternavn", "Adresse", "Epost", dato-lastet-ned-appen]

  return (
    <div id="hovedkontainer" style={hovedStyle}>
      <Header headerText="Min profil" />
      <p className="p__tekstOverPersonlia"> Navn </p>
      <p className="p__personlia">
        {" "}
        {personlia2["name"] +
          " " +
          personlia2["middleName"] +
          " " +
          personlia2["lastName"]}{" "}
      </p>
      <p className="p__tekstOverPersonlia"> Adresse </p>
      <p className="p__personlia"> {personlia["adress"]} </p>
      <p className="p__tekstOverPersonlia"> Epost </p>
      <p className="p__personlia"> {personlia["email"]} </p>
      <p className="p__tekstOverPersonlia"> Lastet ned appen </p>
      <p className="p__personlia">
        {" "}
        {formatDate(personlia2["initialDate"])}, som er{" "}
        {dagerSiden(personlia2["initialDate"])} dager siden{" "}
      </p>

      <Footer />
    </div>
  );
}

const hovedStyle = {
  //maxWidth: "300px",
  margin: "0 auto",
};
