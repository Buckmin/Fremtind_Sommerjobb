import React from "react"
import { MdDirectionsWalk, MdDirectionsBike, MdDriveEta, MdDirectionsBus } from "react-icons/md";


function InfoSectionUpper(props) {
    function selectMeansIcon() {
        let trvlMeans = props.middel
        let icon = <MdDirectionsBus/>
        switch (trvlMeans) {
            case "WALKING":
                icon = <MdDirectionsWalk fontSize="large"/>
                break;
            case "BICYCLING":
                icon = <MdDirectionsBike fontSize="large"/>
                break;
            case "TRANSIT":
                icon = <MdDirectionsBus fontSize="large"/>
                break;
            case "DRIVING":
                icon = <MdDriveEta fontSize="large"/>
                break;
            default:
                icon = <MdDirectionsBus fontSize="large"/>
                break;
        }  
        return icon
    } 
    

    return(
        <div id = 'Info Section Upper' style={{marginTop:15}}>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {selectMeansIcon()} </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {props.tid} <br/> min </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {props.lengde} <br/> km </span>
        </div>
    )
}

export default InfoSectionUpper