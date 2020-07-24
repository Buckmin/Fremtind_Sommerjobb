import React, {useState, useRef, useEffect} from "react"
import { GoogleMap, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';
//import { navigate } from "gatsby"

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TextField from '@material-ui/core/TextField';

import { MdDirectionsWalk, MdDirectionsBike, MdDirectionsBus, MdDirectionsCar } from "react-icons/md";

import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";

import { ErrorMessage, SuccessMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";

import { getJson, setJson } from "../../getJson";


import "../../styles/findTrips.css";

///// INFORMASJON ///////

// NYTTIG: Dersom travelMode = TRANSIT (og det fins tilgjengelige kollektivreiser) vil vi få info om bytter fra APIet <3
// Litt usikker på hvordan vi skal få ut infoen siden dette kun er tilgjengelig for kollektiv, men det er uansett ikke aktuelt før en senere versjon
// finner ved å gå via: response -> routes -> 0 -> legs -> 0 -> steps (steps er array med gå/buss/trikk/gå ol. bytter)

// fortsatt litt problemer med at response blir kalt flere ganger / over query limit
// men fungerer ganske bra
// variabelen "count" gjør at den første responsen brukes, slik at det ikke blir mye lagging i kartet, men flere responser vil fortsatt komme inn (som vi ser i konsollen)

// problemer med at google maps directions API noen ganger ikke finner resultater for en rute, spesielt transit
// dersom man ikke finner tilgjengelige ruter vil dette skrives ut til brukeren og skjule kart/statisikk. Stopper problemet med at informasjon fra forrige reise henger igjen
// dersom google maps anbefaler å gå hele veien ved valg av "TRANSIT" vil statistikken fortsatt ta utgangspunkt i at du reiser med buss. Altså vil den regne ut CO2 fra avstanden,
//    selv om det står at du går (og da slipper du ikke ut co2). co2-en som vises vil altså tilsvare samme distanse med buss.

/////////////////////////


// styles for tabs
const useStylesTabs = makeStyles({
    root: {
      flexGrow: 1,
    },
    tab: {
        minWidth: '25%'
    }
  });

// styles for timepicker
const useStylesTime = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


function FindTrips(props) {

    const classesTabs = useStylesTabs();
    const classesTime = useStylesTime();

    const [travelMode, setTravelMode] = useState("DRIVING");
    
    const [response, setResponse] = useState(null);
    const count = useRef(0);

    const [distanceText, setDistanceText] = useState('');
    const [distanceValue, setDistanceValue] = useState(0);

    const [durationText, setDurationText] = useState('');
    const [durationValue, setDurationValue] = useState(0);

    //satt denne til å være en dato som det ikke er logisk å velge for å kunne gi error hvis de ikke velger dato
    const [date, setDate] = useState("1900-01-01T12:00");

    const [saved, setSaved] = useState();

    const [noRoutes, setNoRoutes] = useState(false);

    let calories = 0;
    let emission = 0;

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
    };


    const NoRoutes = () => (
        <div>
            <br/>
            <h6>Finner ingen resultater for "{travelMode}"</h6>
        </div>
    )

    
    function SaveRoute() {

        //må initialisere "alleTurer" et sted, skal fikses i en annen komponent, men måtte legge inn her første gang man kjører lokalt
        //setJson("alleTurer", {})
        let alleTurer = getJson("alleTurer")

        if (date === "1900-01-01T12:00") {
            setSaved("NO");
        }

        else {
            //distanceValue i meter, tid i sekunder, co2 i gram
            alleTurer[date] = {fra : props.originText, til: props.destinationText, lengde: distanceValue, tid: durationValue, middel: travelMode, CO2: emission, kcal: calories, favoritt: false}
            setJson("alleTurer", alleTurer);
            setSaved("YES");
        }

        

    }
    

    // Brukt 75kg som vekt
    function BicyclingCals() {

        calories = Math.round(310/3600 * durationValue)
        emission = 0

        return(
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {calories} kcal
            </div>
        </div>
        )

    }
    
    //Brukt 75kg som vekt
    function WalkingCals() {

        calories = Math.round(215/3600 * durationValue)
        emission = 0

        return(
        <div className="stats"> 
            <div className="stats-label">
                Kalorier:
            </div>
            <div className="stats-value">
                {calories} kcal
            </div>
        </div>
        )
    }

    // setEmission tar inn: distanceValue [m/1000=km], temp [deg C]
    // emission: Totale utslipp pr person [g]
    // Enkel utgave som kun tar hensyn til de faktorene vi får hentet inn pr dags dato
    // Gjennomsnittlig utslipp 72.5 g/pkm 
    /////// NB: brukt likning for buss! All transit regnes som buss her i første versjon ///////
    function TransitEmission() {

        calories = 0
        emission = Math.round(72.5 * distanceValue/1000 * props.tempFactor)

        return(
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {emission} g
            </div>
        </div>
        )
    }

    // setEmission tar inn: fuelConsum [L/mil], fuel TYPE, dist [m/1000=km], temp [deg C]
    // emission: Totale utslipp pr person [g]
    // Enkel utgave som kun tat hensyn til faktorene vi får hentet inn pr dags dato
    function CarEmission() {

        calories = 0
        emission = Math.round(props.fuelConsum * distanceValue/1000 * props.tempFactor)

        return(
        <div className="stats"> 
            <div className="stats-label">
                CO2:
            </div>
            <div className="stats-value">
                {emission} g 
            </div>
        </div>
        )
    }


        //Skal kun vises hvis det er tilgjengelige ruter
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

        //Skal kun vises hvis det er tilgjengelige ruter
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
        <Paper square className={classesTabs.root}>
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
                <Tab icon={<MdDirectionsCar />} aria-label="Bil"  value="DRIVING" classes={{ root: classesTabs.tab }}/>
                <Tab icon={<MdDirectionsBus />} aria-label="Kollektiv" value="TRANSIT" classes={{ root: classesTabs.tab }}/>
                <Tab icon={<MdDirectionsBike />} aria-label="Sykkel" value="BICYCLING" classes={{ root: classesTabs.tab }}/>
                <Tab icon={<MdDirectionsWalk />} aria-label="Gå" value="WALKING" classes={{ root: classesTabs.tab }}/>
            </Tabs>
        </Paper>
      </div>

        {/* Hvis ingen ruter er tilgjengelige, skriv ut dette */}
        <div>
            { noRoutes ? <NoRoutes /> : null }
            <TravelStats/>
            <TravelRoutes/>
        </div>

        <div>
            <br/>
            {/* NB: Hvis man velger samme dato+tidspunkt to ganger vil reisene overskrives siden dato er key*/}
            <form className={classesTime.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Gjennomført reise:"
                    type="datetime-local"
                    //defaultValue={date}
                    onChange={event => setDate(event.target.value)}
                    className={classesTime.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </form>
        </div>

        <br/>

        {/* Kan redirecte til /ruter der reisen popper opp etter lagring hvis vi bruker knappen under */}
        {/* <PrimaryButton onClick={() => {SaveRoute(); navigate('/ruter')}}>Lagre Reise</PrimaryButton> */} 
        
        {/* Denne knappen vil kun lagre ruten og ikke redirecte */}
        <PrimaryButton onClick={() => SaveRoute() }>Lagre Reise</PrimaryButton>

        <br/><br/>
        
        {/* Litt dårlig error handling, men får holde for nå */}
        {saved==="YES" ? <SuccessMessage title="Lagring fullført">Reisen ble lagret i Mine Reiser</SuccessMessage> : null}
        {saved==="NO" ? <ErrorMessage title="Lagring feilet">Vennligst oppgi en gyldig dato</ErrorMessage> : null}


    </div>

    )
  }



export default FindTrips;