// jeg synes det er teit å kunne velge å sette mål for dag, uke, mnd eller år,
// og så skal tallet konverteres slik at det uasett blir likt for alle.
// da tenker jeg heller å ha mulighet til å sette ny daglig grense, 
// og så se hva de nye grensene blir for uke, mnd, år og totalt automatisk

import React from "react"
// import { FormForDailyGoal } from "../components/inputForms"
import { MinProfilIkon, MineReiserIkon, HjemIkon, ReiseplanleggerIkon, MountainIkon, CowIkon, FremtindLogoIkon } from "../components/customIkoner"
import { FormForDailyGoalForUser } from "../components/inputForms"


export default function setteGrense() {

    return (
        <div id="hovedkontainer" className="div__hovedStyle">

            <FormForDailyGoalForUser />


            <MinProfilIkon page={"/profil"} />
            <MineReiserIkon page="/minereiser" />
            <HjemIkon page="/" />
            <ReiseplanleggerIkon page="/reiseplanlegger" />
            <p>
            <MinProfilIkon page={"/profil2"} />
            <MineReiserIkon page="/minereiser2" />
            <HjemIkon page="/2" />
            <ReiseplanleggerIkon page="/reiseplanlegger2" />
            </p>
            <p>
                <MountainIkon />
            </p>
            <p>
                <CowIkon />
            </p>
            <p>
                <FremtindLogoIkon resize={true} newWidth={100} />
            </p>
        </div>
    )
}