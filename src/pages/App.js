import React from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import "../styles/app.css"


export default function Home({}) {
  let link1 = <div> Informasjon om hvor mye utslipp som er forbundet med de ulike typene drivstoff finner du <a href="https://ecoscore.be/en/info/ecoscore/co2">her</a></div>
  let link2 = <div> Morsom info om hvor mye et gram CO2 tilsvarer finner du <a href="https://www.framtiden.no/gronne-tips/spor-oss/hva-far-jeg-for-et-tonn-co2.html">her</a> </div>
  let link3 = <div> Hva som påvirker utslipp til luft fra veitrafikk finner du <a href="https://www.ssb.no/natur-og-miljo/artikler-og-publikasjoner/hva-pavirker-utslipp-til-luft-fra-veitrafikk">her</a> </div>


  const numbers = [link1, link2, link3];
  
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );


    return (
    <div>
      <Layout>
        <p>Hei! Her kan du finne ut mer om hvor mye CO2 du slipper ut ved å kjøre bil. Utregningen er kun et estimat, 
            men vi håper det kan gi deg litt mer innsikt i utslippene som kommer fra hverdagsreiser.</p>
        <p>
          Dersom du ikke har tallene vi spør etter kan du søke opp bilen din hos statens vegvesen ved 
          hjelp av nummerskiltet på bilen. Denne søkemotoren finner du <a href="https://www.vegvesen.no/kjoretoy/kjop%2Bog%2Bsalg/kjøretøyopplysninger">her</a>. 
        </p>
        <Form />
        
        

        <div className = 'info'>

          <p>
            Dette estimatet har vi funnet ved å multiplisere avstanden du skal kjøre med hvor mye bensin, diesel 
            eller strøm bilen din bruker per km. Deretter bruker vi tall fra denne nettsiden for å finne ut hvor mye CO2 som slippes
            ut per enhet drivstoff. Siden temperatur også påvirker utslippet multipliserer vi til slutt med en temperatur-koeffesient.
          </p>

          <p>
            Linker:
            <ul>
              {listItems}
            </ul>

          </p>
        </div>
      </Layout>
      
    </div>)
  }