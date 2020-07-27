import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/profil.css";
import karikanari from "../../static/images/karikanari.jpg";
import audi from "../../static/images/2016_audi_q5.jpg";
import {
  formatDate,
  dagerSiden,
} from "../components/tidslinjeComp/tidslinjeData/randomDateKG";
import { getJson } from "../getJson";
//import { ManyFunfactCards } from "../components/statistics/funfactCards";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { navigate } from "gatsby"

import { MdEdit } from "react-icons/md";

// lagre til lokal fil: setJson({KEY}, {VARIABEL})
// hente ut lokal fil: {VARIABEL} = getJson({KEY})


export default function Home() {
  let personlia2 = getJson("personlia") || {};
  let carInfo = getJson("carInfo") || {};

  const avatarClasses = useAvatarStyles();
  const buttonClasses = useButtonStyles();

  // const personliaKeys = ["Fornavn", "Mellomnavn", "Etternavn", "Adresse", "Epost", dato-lastet-ned-appen]

  return (
    <div id="hovedkontainer" style={hovedStyle}>


        <Header headerText="Min profil"/>
      
        <div className={avatarClasses.root}>
          <Avatar alt="testbruker" src={karikanari} className={avatarClasses.large} />
        </div>
        
        <div className="edit">
          <Button
            variant="outlined"
            color="default"
            className={buttonClasses.button}
            startIcon={<MdEdit />}
            size="small"
          >
            Rediger profil

          </Button>
        </div>


      <p className="p__tekstOverPersonlia"> Navn </p>
      <p className="p__personlia">
        {" "}
        {personlia2["name"] +
          " " +
          personlia2["middleName"] +
          " " +
          personlia2["lastName"]}{" "}
      </p>
      <p className="p__tekstOverPersonlia"> Fødselsdato </p>
      <p className="p__personlia"> {formatDate(personlia2["birthday"])} </p>
      <p className="p__tekstOverPersonlia"> Adresse </p>
      <p className="p__personlia"> {personlia2["address"]} </p>
      <p className="p__tekstOverPersonlia"> Epost </p>
      <p className="p__personlia"> {personlia2["email"]} </p>
      <p className="p__tekstOverPersonlia"> Lastet ned appen </p>
      <p className="p__personlia">
        {" "}
        {formatDate(personlia2["initialDate"])}, som er{" "}
        {dagerSiden(personlia2["initialDate"])} dager siden{" "}
      </p>

      <br/><hr/>

      <Header headerText="Min bil" style={{marginTop: "1cm"}}/>
      <div className="edit">
          <Button
            variant="outlined"
            color="default"
            className={buttonClasses.button}
            startIcon={<MdEdit />}
            size="small"
            onClick={() => { navigate('/endreBilinfo') }}
          >
            Rediger bilopplysninger

          </Button>
        </div>

      <div>
        {/* <Avatar alt="bil" src={audi} variant="square" className={avatarClasses.large} /> */}
        <img src={audi} alt="bil" style={{maxWidth:"80%"}}/>
      </div>

      <p className="p__tekstOverPersonlia"> Merke </p>
      <p className="p__personlia"> {carInfo["brand"]} </p>

      <p className="p__tekstOverPersonlia"> Modell </p>
      <p className="p__personlia"> {carInfo["model"]} </p>

      <p className="p__tekstOverPersonlia"> Drivstoff </p>
      <p className="p__personlia"> {carInfo["fuel"]} </p>

      <p className="p__tekstOverPersonlia"> Årsmodell </p>
      <p className="p__personlia"> {carInfo["year"]} </p>

      <p className="p__tekstOverPersonlia"> Registreringsnummer </p>
      <p className="p__personlia"> {carInfo["registration"]} </p>

      <p className="p__tekstOverPersonlia"> CO2 forbruk (g/km) </p>
      <p className="p__personlia"> {carInfo["co2consum"]} </p>

      <p className="p__tekstOverPersonlia"> Drivstofforbruk (L/mil) </p>
      <p className="p__personlia"> {carInfo["fuelconsum"]} </p>

      <Footer page="/profil" />
    </div>
  );
}

const hovedStyle = {
  margin: "0 auto",
};

const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    float: "right",
  },
}));



const useButtonStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));