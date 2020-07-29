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

    function formatTime(){
        let prettyTime = ''
        let h = Math.floor(props.tid / 3600);
        let m = props.tid % 3600 / 60;
        m = Number((m).toFixed(0))
    
        h ? prettyTime = [h,m].join('t ') : prettyTime = m
    
        return (<p> {prettyTime} <br/> min </p>)
    }

    function formatLength(){
        let km = props.lengde / 1000;
        km = Number((km).toFixed(2))
    
        return (<p> {km} <br/> km </p>)
    }

    return(
        <div id = 'Info Section Upper' style={{marginTop:15}}>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {selectMeansIcon()} </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {formatTime()} </span>
            <span style = {{float: 'left', width: '30%', textAlign: 'center'}}> {formatLength()} </span>
        </div>
    )
}

export default InfoSectionUpper