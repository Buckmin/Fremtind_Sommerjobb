/* Emma x2 */
import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import TabBar from "../components/tabs"


export default function MyRoutes () {
    return (
        <div>
            <Header headerText="Mine Ruter"/>
            <TabBar labelOne = "Nylig" labelTwo = "Mest reist" labelThree = "Favoritter"/>
            <Footer/>
        </div>
        
    )
}
