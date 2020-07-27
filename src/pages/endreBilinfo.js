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
    const [fuel, setFuel] = useState(carInfo["fuel"]); //må være enten "Bensin", "Diesel" eller "El"
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

                <label id="brandInput" htmlFor="brand" style={{marginBottom:"10px", marginTop:"5px"}}>Merke:
                    <br/><input id="brand" type="text" name="Merke" placeholder={brand} onChange={e => setBrand(e.target.value)}></input>
                </label>

                <label id="modelInput" htmlFor="model" style={{marginBottom:"10px"}}>Modell:
                    <br/><input id="model" type="text" name="Modell" placeholder={model} onChange={e => setModel(e.target.value)}></input>
                </label>

                <br/>
                <label id="fuelLabel" htmlFor="fuel" style={{marginBottom:"10px"}}>Drivstoff:
                    {/* <br/><input id="fuel" type="text" name="Drivstoff" placeholder={fuel} onChange={e => setFuel(e.target.value)}></input> */}
                    <br/>
                    <select name="fuel" id="fuelSelect" value={fuel} onChange={e => setFuel(e.target.value)}>
                        <option value="Bensin" selected>Bensin</option>
                        <option value="Diesel">Diesel</option>
                        <option value="El">El</option>
                    </select>
                </label>
                <br/>

                <label id="yearInput" htmlFor="year" style={{marginBottom:"10px", marginTop:"5px"}}>Årsmodell:
                    <br/><input id="year" type="number" name="Årsmodell" placeholder={year} onChange={e => setYear(parseInt(e.target.value))}></input>
                </label>

                <label id="registrationInput" htmlFor="registration" style={{marginBottom:"10px"}}>Registreringsnummer:
                    <br/><input id="registration" type="text" name="Registreringsnummer" placeholder={registration} onChange={e => setRegistration(e.target.value)}></input>
                </label>

                <label id="co2consumInput" htmlFor="co2consum" style={{marginBottom:"10px"}}>CO2 forbruk:
                    <br/><input id="co2consum" type="number" step="0.01" name="CO2 forbruk" placeholder={co2consum} onChange={e => setCo2consum(parseFloat(e.target.value))}></input>
                </label>

                <label id="fuelconsumInput" htmlFor="fuelconsum" style={{marginBottom:"10px"}}>Drivstofforbruk:
                    <br/><input id="fuelconsum" type="number" step="0.01" name="Drivstofforbruk" placeholder={fuelconsum} onChange={e => setFuelconsum(parseFloat(e.target.value))}></input>
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