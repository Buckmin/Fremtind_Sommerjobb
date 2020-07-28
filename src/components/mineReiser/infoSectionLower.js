import React from "react"


function InfoSectionLower(props) {
    return(
        <div id = 'Info Section Lower' style={{marginTop:15}}>
            <p>Utslipp og forbrenning</p>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {props.CO2} <br/> g CO2 </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center', paddingBottom:10}}> {props.kcal} <br/> kcal </span>
        </div>
    )
}

export default InfoSectionLower