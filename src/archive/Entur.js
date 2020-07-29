import React, {useState, useEffect} from "react"
import createEnturService from '@entur/sdk'
import moment from "moment"

const service = createEnturService({ 
    clientName: 'fremtind - summerproject2020' 
})


// NOTATER:
// Brukte denne funksjonen til å filtrere ut nyttig info fra den gigantiske json-filen som createEnturService gir oss.
// Endte ikke opp med å bruke fordi det var vanskelig å få origin og destination på riktig inputform i getTripPatterns (location),
//   og det var litt for mye info om bytter o.l. å holde styr på i koden nå i første iterasjon.
// Absolutt en idé å bruke Enturs API for kollektivreiser senere, ettersom Google maps har dårlig dekning for kollektivtransport i Norge, mens Entur dekker hele Norge.



// MERK: Enturs API returnerer kun kollektivreiser - må bruke google maps for ren "gå", "sykle", "bil" / non-transit

function FindTransitTrips(props) {

    const [legs, setLegs] = useState([]);
    const [parsedTrips, setParsedTrips] = useState([]);

    const getTrips = async (from, to) => {
        return await service.getTripPatterns({
            from: from,
            to: to,
            searchDate: new Date(),
        })
    }
    const getLegs = (trip) => {
        trip.legs.forEach(leg =>
            {
                legs.push({
                    mode: leg.mode,
                    endTime: leg.expectedEndTime,
                    startTime: leg.expectedStartTime,
                    distance: leg.distance,
                });
            }
        )
        setLegs(legs)
        console.log('legs', legs)    
        return legs;
    }

    useEffect( () => {
        const fetchTrips = async () => {

        //dette blir et problem dersom brukeren velger en adresse i autocomplete som ikke fins her
        //prøver å få gjort om brukerens input til en "location"
        //DETTE FUNKER IKKE. MÅ FÅ TAK I KOORDINATER PÅ EN MÅTE

/*         const [originFeatures, destinationFeatures] = await Promise.all([
            service.getFeatures(props.origin),
            service.getFeatures(props.destination),
        ])

        const originLocation = service.convertFeatureToLocation(originFeatures[0])
        const destinationLocation = service.convertFeatureToLocation(destinationFeatures[0])

        console.log('originLOC', originLocation)
        console.log('destLOC', destinationLocation) */


            //inntil videre brukes bare en forhåndsdefinert "Location" her
/*             const trips = await getTrips(
                {name: "Bjerkealleen 5A, Skedsmo",
                    coordinates: {
                        latitude: 59.96050414081307,
                        longitude:11.040338686322317
                    }},
                {
                    place:"NSR:StopPlace:5532",
                    name:"Dyrløkke, Frogn"
                }) */

                //NOE ER VELDIG GALT HER. KAN IKKE TRENGE SÅ MANGE BYTTER??
                const trips = await getTrips(
                {name: "Trondheim Torg",
                    coordinates: {
                        latitude: 63.430026,
                        longitude:10.393367
                }},
                {name: "Gløshaugen",
                coordinates: {
                    latitude: 63.416764,
                    longitude:10.407594
                }})
            trips.forEach(trip => parsedTrips.push(getLegs(trip)));
            //trips.forEach(trip => setParsedTrips(parsedTrips => [... parsedTrips, getLegs(trip)]));
            setParsedTrips(parsedTrips)

            console.log('parsedTrips', parsedTrips);

            return parsedTrips;
        }
        
        fetchTrips();
    }, [])



    return(

        //format: parsedTrips - liste over turer
        //        parsedTrips[0] - tur nr 1
        //        parsedTrips[0][0] - tur nr 1, første del av reisen

        //<div>{parsedTrips[0][0].mode}</div> --> tur 1, første del, transportmiddel
    
        <div style={{marginTop: 30}}>
                mode: {parsedTrips[0][0].mode}
                time: {moment(new Date(parsedTrips[0][0].endTime)).diff(new Date (parsedTrips[0][0].startTime), "minutes")}
                distance: {parsedTrips[0][0].distance}
        </div>

        )
}
export default FindTransitTrips