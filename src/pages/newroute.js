import React from "react"
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "gatsby"

// under her importerer vi alle kompontentene vi lager
import Header from "../components/header"
import Footer from "../components/Footer"

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
        <div>Hei hei test</div>
        <Footer />
    </div>
  )
}




const hovedStyle = {
  //maxWidth: "300px",
  margin: "0 auto"
};

const backStyle = {
    color: "white",
    fontSize: "20px",
    alignItems: "left",
}
