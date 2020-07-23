import React, {useState, useRef, useEffect} from "react"
import { GoogleMap, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';

//VIKTIG: Dersom travelMode = TRANSIT vil vi få info om bytter <3
//Litt usikker på hvordan vi skal få ut infoen siden dette kun er tilgjengelig for kollektiv, men skal se på det
//response -> routes -> 0 -> legs -> 0 -> steps (steps er array med gå/buss/trikk/gå ol. bytter)

// fortsatt litt problemer med at response blir kalt flere ganger / over query limit
// men fungerer ganske bra

// problemer med at google maps directions API noen ganger ikke finner resultater for en rute
// enten kun resultater for bil, eller at kollektivforslaget er å gå hele veien
// dersom man velger et annet transportmiddel og response.status er "ZERO RESULTS", vil ikke kartet oppdatere seg fra forrige transportmiddel, kan virke misvisende

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MdDirectionsWalk, MdDirectionsBike, MdDirectionsBus, MdDirectionsCar } from "react-icons/md";

import "../../styles/findTrips.css"


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

    const [noRoutes, setNoRoutes] = useState(false);

    //la til count
    useEffect(() => {
        count.current = 0;
      }, []);
    
    function directionsCallback (response) {
        console.log('response: ', response)

        if (response !== null) {
        if (response.status === 'OK' && count.current === 0) {
            
            //her har vi tilgjengelige ruter
            setNoRoutes(false);

            //la inn count
            count.current += 1;
            setResponse(response)
            //console.log('count', count)

            //verdier for avstand (tekst+tallverdi)
            setDistanceText(response.routes[0].legs[0].distance.text)
            setDistanceValue(response.routes[0].legs[0].distance.value)

            //verdier for tid (tekst+tallverdi)
            setDurationText(response.routes[0].legs[0].duration.text)
            setDurationValue(response.routes[0].legs[0].duration.value)

        }
        if (response.status === "ZERO_RESULTS" && count.current === 0) {
            //her har vi ingen tilgjengelige ruter
            setNoRoutes(true);
            count.current += 1;

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

    const NoRoutes = () => (
        <div>
            <br/>
            <h6>Finner ingen resultater for "{travelMode}"</h6>
        </div>
    )
    

    {/* Dette er veeeeldig feil formler for CO2 og kalorier, prøver bare å vise hvordan vi kan bruke verdiene. Legg inn riktig formel her! */}
    const BicyclingCals = () => (
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {Math.round(durationValue/23+distanceValue/1000)} kcal
            </div>
        </div>

    )

    const WalkingCals = () => (
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {Math.round(durationValue/60+distanceValue/1000)} kcal
            </div>
        </div>
    )

    const TransitEmission = () => (
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {Math.round(durationValue/500+distanceValue/1000)} kg
            </div>
        </div>
    )

    const CarEmission = () => (
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {Math.round(durationValue/50+distanceValue/100)} kg
            </div>
        </div>
    )




    const MapDirections = () => (
        <div className='map-container'>
        <br/>
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
/*                     onLoad={ directionsService => {
                      console.log('DirectionsService onLoad directionsService: ', directionsService)
                  }} */
                  // optional
/*                     onUnmount={directionsService => {
                      console.log('DirectionsService onUnmount directionsService: ', directionsService)
                  }} */
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
/*                     onLoad={directionsRenderer => {
                      console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }} */
                  // optional
/*                     onUnmount={directionsRenderer => {
                      console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }} */
                  />
              )
              }

          </GoogleMap>
      </div>
    )


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

        </div>

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
                <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT"/>
                <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING"/>
                <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING"/>
            </Tabs>
        </Paper>
      </div>

        <div>
            <br/>
            {/* Distance og duration har "text" og "value", der value kan brukes i beregninger, mens text er bra til utskriving */}
            <div className="stats"> 
                <div className="stats-label">
                    Avstand:
                </div>
                <div className="stats-value">
                    {distanceText} 
                </div>
            </div> &emsp;&emsp;
            <div className="stats"> 
                <div className="stats-label">
                    Tid:
                </div>
                <div className="stats-value">
                    {durationText} 
                </div>
            </div> &emsp;&emsp;
            { travelMode==="DRIVING" ? <CarEmission /> : null }
            { travelMode==="TRANSIT" ? <TransitEmission /> : null }
            { travelMode==="BICYCLING" ? <BicyclingCals /> : null }
            { travelMode==="WALKING" ? <WalkingCals /> : null }
            <br/>
        </div>

        <div>
            { noRoutes ? <NoRoutes /> : null }
            {/* { !noRoutes ? <MapDirections /> : null} */}
            <MapDirections/>

        </div>


      </div>
    )
  }



export default FindTrips;