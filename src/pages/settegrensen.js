// jeg synes det er teit å kunne velge å sette mål for dag, uke, mnd eller år,
// og så skal tallet konverteres slik at det uasett blir likt for alle.
// da tenker jeg heller å ha mulighet til å sette ny daglig grense, 
// og så se hva de nye grensene blir for uke, mnd, år og totalt automatisk

import React from "react"
import { MountainIkon, FremtindLogoIkon } from "../components/customIkoner"
import { FormForDailyGoalForUserLS } from "../components/inputForms"
import Header from "../components/header"
import { Link } from "gatsby"
import Footer from "../components/footer"


export default function Home() {

    return (
        <div id="hovedkontainer" className="div__hovedStyle">
            <Header headerText="Sett deg en øvre utslippsgrense"/>

            <Link to="/">Gå hjem</Link>
            <p> </p>

            <FormForDailyGoalForUserLS />

            <p style={{textAlign: "center"}}>
                <MountainIkon />
            </p>
            <p style={{textAlign: "center"}}>
                <FremtindLogoIkon resize={true} newWidth={120} />
            </p>

            <Footer />
        </div>
    )
}