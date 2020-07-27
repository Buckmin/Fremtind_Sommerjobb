import React, {useState} from 'react';

import Button from "react-bootstrap/Button";

import Header from "../components/header";
import Footer from "../components/footer";

import {getJson, setJson} from "../getJson";

import { Link } from "gatsby"


export default function EndreBilinfo() {

    let carInfo = getJson("carInfo") || {};

    const [brand, setBrand] = useState(carInfo["brand"]);
    const [model, setModel] = useState(carInfo["model"]);
    const [fuel, setFuel] = useState(carInfo["fuel"]);
    const [year, setYear] = useState(carInfo["year"]);
    const [registration, setRegistration] = useState(carInfo["registration"]);
    const [co2consum, setCo2consum] = useState(carInfo["co2consum"]);
    const [fuelconsum, setFuelconsum] = useState(carInfo["fuelconsum"]);

    function handleSubmit() {
        let carDict = {
            brand: brand,
            model: model,
            fuel: fuel,
            year: year,
            registration: registration,
            co2consum: co2consum, //g/km
            fuelconsum: fuelconsum,  //L/mil
          };
          setJson("carInfo", carDict);
    }


    return (
        <div style={{marginBottom:"100px"}}>
            <div>
            <Header headerText="Endre bilopplysninger"/>
            <Link to="/profil">Tilbake til profil</Link>
            </div>

        <div>
            <br/>
            <p>Fyll ut kun de feltene du vil endre, og klikk "lagre endringer" for å lagre.</p>

            <form  id="updateCarInfo" className="form">

                <label id="brandInput" htmlFor="brand" style={{marginBottom:"10px", marginTop:"5px"}}>Merke:&emsp;
                    <br/><input id="brand" type="text" name="Merke" placeholder={brand} onChange={e => setBrand(e.target.value)}></input>
                </label>

                <label id="modelInput" htmlFor="model" style={{marginBottom:"10px"}}>Modell:&emsp;
                    <br/><input id="model" type="text" name="Modell" placeholder={model} onChange={e => setModel(e.target.value)}></input>
                </label>

                <label id="fuelInput" htmlFor="fuel" style={{marginBottom:"10px"}}>Drivstoff:&emsp;
                    <br/><input id="fuel" type="text" name="Drivstoff" placeholder={fuel} onChange={e => setFuel(e.target.value)}></input>
                </label>

                <label id="yearInput" htmlFor="year" style={{marginBottom:"10px"}}>Årsmodell:&emsp;
                    <br/><input id="year" type="number" name="Årsmodell" placeholder={year} onChange={e => setYear(parseInt(e.target.value))}></input>
                </label>

                <label id="registrationInput" htmlFor="registration" style={{marginBottom:"10px"}}>Registreringsnummer:&emsp;
                    <br/><input id="registration" type="text" name="Registreringsnummer" placeholder={registration} onChange={e => setRegistration(e.target.value)}></input>
                </label>

                <label id="co2consumInput" htmlFor="co2consum" style={{marginBottom:"10px"}}>CO2 forbruk:&emsp;
                    <br/><input id="co2consum" type="float" name="CO2 forbruk" placeholder={co2consum} onChange={e => setCo2consum(parseFloat(e.target.value))}></input>
                </label>

                <label id="fuelconsumInput" htmlFor="fuelconsum" style={{marginBottom:"10px"}}>Drivstofforbruk:&emsp;
                    <br/><input id="fuelconsum" type="float" name="Drivstofforbruk" placeholder={fuelconsum} onChange={e => setFuelconsum(parseFloat(e.target.value))}></input>
                </label>

                <br/><br/>
                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Lagre endringer
                </Button>

            </form>
            
        </div>

        <Footer page="/profil" />
        </div>
    );


    }