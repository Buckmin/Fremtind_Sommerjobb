import React from "react"


function InfoSectionLower(props) {
    let tur = props.turInfo

    return(
        <div id = 'Info Section Lower' style={{marginTop:15}}>
            <p>Utslipp og forbrenning</p>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {tur[Object.keys(tur)].CO2} <br/> g CO2 </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center', paddingBottom:10}}> {tur[Object.keys(tur)].kal} <br/> kal </span>
        </div>
    )
}

export default InfoSectionLower