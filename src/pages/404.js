import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"



export default function ErrorPage () {
    let tekstHeader = "Oi! Her skjedde det noe rart"


    return (
        <div style={{textAlign: "center"}}>
            <Header headerText={tekstHeader} />
            
            <h1 style={{fontSize: 150}}>404</h1>


            <img src="https://1.bp.blogspot.com/_wxZUnN00WM4/S3FnhyBGbLI/AAAAAAAABis/-YWbWo_v7Rc/s400/goshDarnIt.png" alt="darn" />

            <Footer />
        </div>
    )
}
