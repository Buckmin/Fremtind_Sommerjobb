import React from "react"
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "gatsby"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import Footer from "../components/Footer"

import Directions from "../components/Directions";
import {LoadScript} from '@react-google-maps/api';

export default function NewRoute() {

    function BackButton (props) {
        return (
            <div style={backStyle}>
                <Link to={props.linkLink}>
                    {props.iconName}
                    {props.buttonText}
                </Link>
            </div>
        )
    }

  return ( 
    <div id="hovedkontainer" style={hovedStyle}>
        <Header headerText="Ny rute"/>
        <BackButton iconName={<BsChevronLeft size={25}/>} linkLink="/ruter" buttonText="Tilbake"/>
        <br/>
        <div>
            <LoadScript googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'>
                <Directions/>
            </LoadScript>
        </div>
        <Footer />
    </div>
  )
}




const hovedStyle = {
  //maxWidth: "300px",
  margin: "0 auto"
};

const backStyle = {
    fontSize: "20px",
    alignItems: "left",
}
