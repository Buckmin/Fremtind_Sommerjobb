import React, {useState, useEffect} from "react"
import createEnturService from '@entur/sdk'

const service = createEnturService({ 
    clientName: 'fremtind - summerproject2020' 
})

function FindSomeTrips(props) {

    const [trips, setTrips] = useState();
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [travelMode, setTravelMode] = useState();

    

    useEffect( () => {
        const fetchTrips = async () => {
            //etterhvert endre til service.findTrips(props.origin, props.destination) som tas inn via input
            const response = await service.findTrips('Oslo S', 'Bergen stasjon')
            console.log(JSON.stringify(response))
            setTrips(response)
        }


        fetchTrips()

    }, [])

    if (!trips || trips.length <= 0) {
        return <div>Ingen data å vise.</div>
    }

    function printLeg(leg) {
        return <div>
            <div>mode: {leg.mode}</div>
            <div>{JSON.stringify(leg.fromPlace)}</div>
            <div>{JSON.stringify(leg.toPlace)}</div>
        </div>
    }

    function printLegs(legs) {
        return legs.map( leg => printLeg(leg) )
    }

    function onClick () {
        if (origin.value !== '' && destination.value !== '') {
          setOrigin(origin)
          setDestination(destination)
        }
      }

    function filterTrips(trips, mode) {
        if (mode === 'foot') {
            // Return trips where ALL legs are 'foot'
            return trips.filter(t => {
            return t.legs.filter( l => l.mode === 'foot' ).length === t.legs.length;
            })
        }
        if (mode === 'rail') {
            // Return trips where AT LEAST ONE leg is 'rail'
            return trips.filter(t => {
            return t.legs.filter( l => l.mode === 'rail').length > 0;
            })
        }
            // Return all trips as fallback

        return trips;
    }

    const TripIcon = ({mode}) => {
    return <div>IMAGE</div>
    }

    const TripSummary = ({trip}) => {
    return (
        <div>
            <TripIcon mode={trip.mode}/>
                <div>{trip.duration} sekunder</div>
                <div>{trip.distance} km</div>
                <div>todo: calories</div>
                {/*  Accordion with map that draws points from trip.pointsOnLink */}
        </div> )
    }

    const TripList = () => {
        const [trips, setTrips] = useState([]);
        const [filter, setFilter] = useState();
        const relevantTrips = filterTrips(trips, filter);
        return (
            <div>  
                <div onClick={() => setFilter("rail") }>RAIL</div>
                <div onClick={() => setFilter("foot") }>FOOT</div>
                { 
                Object.values(relevantTrips).map( trip => {  
                    return <TripSummary trip={trip}/>} )
                }
                </div> )
    }

    //DISSE FUNGERER
    //const stuff = trips.map( trip => (<div key={trip.id}>{trip.legs[0].aimedEndTime}</div>))
    //const stuff = trips.map( trip => (<div key={trip.id}>{trip.legs[0].authority.id}</div>))
    
    //DISSE FUNGERER IKKE
    //const stuff = trips.legs.map( (legs, i) => (<div key={i}>{legs.distance}</div>))
    //const stuff = trips.map( trip => <div key={trip.id}>{JSON.stringify(trip.distance)}</div> )
    //const stuff = trips.map( trip => (<div key={trip.id}>{trip.legs[4].expectedEndTime}</div>))

    //PRINTLEGS
    //const stuff = trips.map( trip => (<div key={trip.id}>{printLegs(trip.legs)}</div>))


    return(
        <div>Hei</div>
    )

}

export default FindSomeTrips

