import React, {useState, useRef, useEffect} from "react"
import { GoogleMap, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';

//import {LoadScript} from '@react-google-maps/api';

//GOOGLE API ALREADY PRESENTED?

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MdDirectionsWalk, MdDirectionsBike, MdDirectionsBus, MdDirectionsCar } from "react-icons/md";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      //maxWidth: 500,
    },
  });

function FindTrips(props) {

    const classes = useStyles();
    const [travelMode, setTravelMode] = useState("DRIVING");
    //0 er bil, 1 er sykkel, 2 er kollektiv og 3 er gå
    
    const [response, setResponse] = useState(null);
    const count = useRef(0);

    const [distanceText, setDistanceText] = useState('');
    const [distanceValue, setDistanceValue] = useState(0);

    const [durationText, setDurationText] = useState('');
    const [durationValue, setDurationValue] = useState(0);


    //la til count
    useEffect(() => {
        count.current = 0;
      }, []);
    
    function directionsCallback (response) {
        console.log('response: ', response)

        if (response !== null) {
        if (response.status === 'OK' && count.current === 0) {
            //la inn count
            count.current += 1;
            setResponse(response)

            //verdier for avstand (tekst+tallverdi)
            setDistanceText(response.routes[0].legs[0].distance.text)
            setDistanceValue(response.routes[0].legs[0].distance.value)

            //verdier for tid (tekst+tallverdi)
            setDurationText(response.routes[0].legs[0].duration.text)
            setDurationValue(response.routes[0].legs[0].duration.value)

        } else {
            console.log('response2: ', response)
        }
        }
    }


    const handleModeChange = (event, newMode) => {
        setTravelMode(newMode);
        count.current = 0;
        //console.log('travelmode', newMode)
    };

    function onMapClick (...args) {
        console.log('onClick args: ', args)
    }
  

    return (
      <div className='map'>
        <div className='map-settings'>
{/*             <div>
                Fra: {props.origin}
                <br/>
                Til: {props.destination}
            </div> */}

          <div>
            <Paper square className={classes.root}>
                <Tabs
                    value={travelMode}
                    onChange={handleModeChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    {/* Hvis vi vil ha med tekst under ikon, bruk disse */}
{/*                     <Tab icon={<MdDirectionsCar />} aria-label="Bil"  value="DRIVING" label="Bil"/>
                    <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING" label="Sykkel"/>
                    <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT" label="Kollektiv"/>
                    <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING" label="Gå"/> */}

                    {/* Hvis vi ikke vil ha tekst under ikon, bruk disse */}
                    <Tab icon={<MdDirectionsCar />} aria-label="Bil"  value="DRIVING"/>
                    <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING"/>
                    <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT"/>
                    <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING"/>
                </Tabs>
            </Paper>
          </div>

        </div>

        <div className='map-container'>
          <br/>
          {/* <LoadScriptNext googleMapsApiKey='AIzaSyCkV2kMByU-otnE4P4csvqB4Btj8LdQywY'> */}
            <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                height: '400px',
                width: '100%'
                }}
                // required
                zoom={12}
                // required
                center={{
                lat: 59.911491,
                lng: 10.757933
                }}
                // optional
                onClick={() => onMapClick()}
                // optional
                onLoad={map => {
                console.log('DirectionsRenderer onLoad map: ', map)
                }}
                // optional
                onUnmount={map => {
                console.log('DirectionsRenderer onUnmount map: ', map)
                }}
            >
                {
                    (
                    props.destination !== '' &&
                    props.origin !== ''
                    ) && (
                    <DirectionsService
                    // required
                    options={{ 
                        //bruker placeID for å være helt sikker på at vi får riktig sted
                        destination: {'placeId': props.destination},
                        origin: {'placeId': props.origin},
                        travelMode: travelMode
                    }}
                    // required
                    callback={directionsCallback}
                    // optional
                    onLoad={ directionsService => {
                        console.log('DirectionsService onLoad directionsService: ', directionsService)
                    }}
                    // optional
                    onUnmount={directionsService => {
                        console.log('DirectionsService onUnmount directionsService: ', directionsService)
                    }}
                    />
                )
                }

                {
                response !== null && (
                    <DirectionsRenderer
                    // required
                    options={{ 
                        directions: response
                    }}
                    // optional
                    onLoad={directionsRenderer => {
                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                    }}
                    // optional
                    onUnmount={directionsRenderer => {
                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                    }}
                    />
                )
                }
            </GoogleMap>
          {/* </LoadScriptNext> */}
        </div>

        <div>
            {/* Distance og duration har "text" og "value", der value kan brukes i beregninger, mens text er bra til utskriving */}
            <br/>
            Informasjon om reisen: 
            <br/>
            Avstand: {distanceText}
            <br/>
            Tid: {durationText}
        </div>

      </div>
    )
  }



export default FindTrips;