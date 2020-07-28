import React from "react"
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import CommuteIcon from '@material-ui/icons/Commute';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
// Bruk span for å få det ved siden av

function InfoSectionUpper(props) {
    let tur = props.turInfo
    
    function selectMeansIcon(tur) {
        let trvlMeans = tur[Object.keys(tur)].middel
        let icon = ''
        switch (trvlMeans) {
            case "WALKING":
                icon = <DirectionsWalkIcon fontSize="large"/>
                break;
            case "BICYCLING":
                icon = <DirectionsBikeIcon fontSize="large"/>
                break;
            case "TRANSIT":
                icon = <CommuteIcon/>
                break;
            case "DRIVING":
                icon = <DriveEtaIcon/>
                break;
            default:
                break;
        }
        return icon
    }
    

    return(
        <div id = 'Info Section Upper' style={{marginTop:15}}>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {selectMeansIcon(tur)} </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {tur[Object.keys(tur)].tid} <br/> min </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {tur[Object.keys(tur)].lengde} <br/> km </span>
        </div>
    )
}

export default InfoSectionUpper