import React, {useState, useEffect} from "react"
import createEnturService from '@entur/sdk'
import AccordionTravel from "./AccordionTravel"
import moment from "moment"

const service = createEnturService({ 
    clientName: 'fremtind - summerproject2020' 
})



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

        //her slutter galskapen

            //inntil videre brukes bare en forhåndsdefinert "Location" her
            const trips = await getTrips(
                {name: "Bjerkealleen 5A, Skedsmo",
                    coordinates: {
                        latitude: 59.96050414081307,
                        longitude:11.040338686322317
                    }},
                {
                    place:"NSR:StopPlace:5532",
                    name:"Dyrløkke, Frogn"
                })
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
{/*             <AccordionTravel
                mode={parsedTrips[0][0].mode}
                time={moment(new Date(parsedTrips[0][0].endTime)).diff(new Date (parsedTrips[0][0].startTime), "minutes")}
                distance={parsedTrips[0][0].distance}
                co2={10} //midlertidig verdi fram til kalkulatoren er oppe og kjører
            /> */}
            Heihei
        </div>

        )
}
export default FindTransitTrips