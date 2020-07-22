/* Emma x2 */
import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import AccordionJS from "../components/AccordionJS"

import { BsPlus } from "react-icons/bs";
import { Link } from "gatsby"


export default function MyRoutes () {

    function NewRouteButton (props) {
        return (
            <div style={buttonStyle}>
                <Link to={props.linkLink}>
                    {props.iconName}
                    
                </Link>
            </div>
        )
    }

    return (

        <div style={hovedStyle}>
            <Header headerText="Mine ruter"/>
            <AccordionJS 
                title="Hjem - Jobb" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Hammersborggata 2"
            />
            <AccordionJS 
                title="Jobb - Hjem" 
                fromDest="Hammersborggata 2"
                toDest="Henrik Ibsens gate 1"
            />
            <AccordionJS 
                title="Hjem - Barnehagen" 
                fromDest="Henrik Ibsens gate 1"
                toDest="Damstredet 1"
            />
            <AccordionJS 
                title="Barnehagen - Hjem" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            />
{/*             <AccordionJS 
                title="test1" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            />
            <AccordionJS 
                title="test2" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            />
            <AccordionJS 
                title="test3" 
                fromDest="Damstredet 1"
                toDest="Henrik Ibsens gate 1"
            /> */}
            <NewRouteButton iconName={<BsPlus size={40} color={"white"}/>} linkLink="/newroute" />
            <Footer page="/minereiser" />
        </div>
        
    )
}

const hovedStyle = {
    //maxWidth: "300px",
    margin: "0 auto"
  };

const buttonStyle = {
    overflow: "auto",
    position: "fixed",
    right: "5px",
    bottom: "100px",
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: "50%",
    backgroundColor: "#6F6F6F",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
    padding: "15px",
    marginRight: "5%",
    display: "block"


}