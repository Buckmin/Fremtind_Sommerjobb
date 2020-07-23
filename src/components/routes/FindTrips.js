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
      //overflow: 'hidden',
      //marginBottom: null,
      //maxWidth: 500,
    },
    tab: {
        minWidth: '25%', // a number of your choice
        //width: 100, // a number of your choice
    }
  });

function FindTrips(props) {

    const classes = useStyles();
    const [travelMode, setTravelMode] = useState("DRIVING");
    
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
    
    

    // Brukt 75kg som vekt
    const BicyclingCals = () => (
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {Math.round(310/3600 * durationValue)} kcal
            </div>
        </div>

    )
    
    //Brukt 75kg som vekt
    const WalkingCals = () => (
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {Math.round(215/3600 * durationValue)} kcal
            </div>
        </div>
    )

    // INPUT distanceValue [m/1000=km], temp [deg C]
    // OUTPUT Totale utslipp pr person [g]
    // Enkel utgave som kun tar hensyn til de faktorene vi får hentet inn pr dags dato
    // Gjennomsnittlig utslipp 72.5 g/pkm 
    /////// NB: brukt likning for buss! All transit regnes som buss her i første versjon ///////
    const TransitEmission = () => (
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {Math.round(72.5 * distanceValue/1000 * props.tempFactor)} g
            </div>
        </div>
    )

    // INPUT fuelConsum [L/mil], fuel TYPE, dist [m/1000=km], temp [deg C]
    // OUTPUT Totale utslipp pr person [g]
    // Enkel utgave som kun tat hensyn til faktorene vi får hentet inn pr dags dato
    const CarEmission = () => (
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {Math.round(props.fuelConsum * distanceValue/1000 * props.tempFactor)} g 
            </div>
        </div>
    )

        {/* Skal kun vises hvis det er tilgjengelige ruter */}
        const TravelStats = () => (
            //vil endre className som toggler informasjon her ut i fra om noRoutes er true eller ikke
            <div className={noRoutes ? 'info-hidden' : 'info-active'}>
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
        )

        {/* Skal kun vises hvis det er tilgjengelige ruter */}
        const TravelRoutes = () => (
            <div className={noRoutes ? 'info-hidden' : 'info-active'}>
            <br/>
            <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                height: '300px',
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
      <div className='route-options'>

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
{/*                 <Tab icon={<MdDirectionsCar />} aria-label="Bil"  value="DRIVING" label="Bil" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT" label="Kollektiv" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING" label="Sykkel" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING" label="Gå" classes={{ root: classes.tab }}/> */}

                {/* Hvis vi ikke vil ha tekst under ikon, bruk disse */}
                <Tab icon={<MdDirectionsCar />} aria-label="Bil"  value="DRIVING" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING" classes={{ root: classes.tab }}/>
                <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING" classes={{ root: classes.tab }}/>
            </Tabs>
        </Paper>
      </div>

        {/* Hvis ingen ruter er tilgjengelige, skriv ut dette */}
        <div>
            { noRoutes ? <NoRoutes /> : null }
            {/* { noRoutes ? <TravelStats statsDesign="hidden-stats"/> : <TravelStats statsDesign="active-stats"/> } */}
            <TravelStats/>
            <TravelRoutes/>
        </div>
    

    </div>

    )
  }



export default FindTrips;