import React, {useState} from 'react';

import Button from "react-bootstrap/Button";

import Header from "../components/header";
import Footer from "../components/footer";

import {getJson, setJson} from "../getJson";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
    formatDateDash,
  } from "../components/tidslinjeComp/tidslinjeData/randomDateKG";

import { Link } from "gatsby"

const useStylesTime = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        display: 'flex',
        flexWrap: 'wrap',
    },
}));


export default function EndrePersonalia() {

    let personalia = getJson("personlia") || {};

    const [name, setName] = useState(personalia["name"]);
    const [middleName, setMiddleName] = useState(personalia["middleName"]);
    const [lastName, setLastName] = useState(personalia["lastName"]); //må være enten "Bensin", "Diesel" eller "El"
    const [birthday, setBirthday] = useState(personalia["birthday"]);
    const [address, setAddress] = useState(personalia["address"]);
    const [email, setEmail] = useState(personalia["email"]);

    const classesTime = useStylesTime();


    function handleSubmit() {
        let personaliaDict = {
            name: name,
            middleName: middleName,
            lastName: lastName,
            birthday: birthday,
            address: address,
            email: email,
            initialDate: new Date("2020-01-01"), //vil ikke endre denne
          };
          setJson("personlia", personaliaDict);
    }


    return (
        <div style={{marginBottom:"100px"}}>
            <div>
            <Header headerText="Endre profildetaljer"/>
            <Link to="/profil">Tilbake til profil</Link>
            </div>

        <div>
            <br/>
            <p>Fyll ut kun de feltene du vil endre, og klikk "lagre endringer" for å lagre.</p>

            <form  id="updatePersonalia" className="form">

                <label id="nameInput" htmlFor="name" style={{marginBottom:"10px", marginTop:"5px"}}>Fornavn:
                    <br/><input id="name" type="text" name="Fornavn" placeholder={name} onChange={e => setName(e.target.value)}></input>
                </label>

                <label id="middleNameInput" htmlFor="middleName" style={{marginBottom:"10px"}}>Mellomnavn:
                    <br/><input id="middleName" type="text" name="Mellomnavn" placeholder={middleName} onChange={e => setMiddleName(e.target.value)}></input>
                </label>

                <label id="lastNameInput" htmlFor="lastName" style={{marginBottom:"10px"}}>Etternavn:
                    <br/><input id="lastName" type="text" name="Etternavn" placeholder={lastName} onChange={e => setLastName(e.target.value)}></input>
                </label>

                <label id="addressInput" htmlFor="address" style={{marginBottom:"10px"}}>Adresse:
                    <br/><input id="address" type="text" name="Adresse" placeholder={address} onChange={e => setAddress(e.target.value)}></input>
                </label>

                <label id="emailInput" htmlFor="email" style={{marginBottom:"10px"}}>E-post:
                    <br/><input id="email" type="email" name="E-post" placeholder={email} onChange={e => setEmail(e.target.value)}></input>
                </label>
                
    
                <label id="birthdayInput" htmlFor="birthday" style={{marginBottom:"10px"}}>Fødselsdato:
                    <br/>
                    <TextField
                        id="birthday"
                        type="date"
                        defaultValue={formatDateDash(birthday)}
                        onChange={event => setBirthday(new Date(event.target.value))}
                        className={classesTime.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <br/>
                </label>


                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Lagre endringer
                </Button>

            </form>
            
        </div>

        <Footer page="/profil" />
        </div>
    );


    }