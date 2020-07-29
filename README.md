<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <h1> Vanir </h1>
    <h3> Sommerstudentene under SPINN, Fremtind Forsikring </h3>
</p>

- [:rocket: Introduksjon](#rocket-introduksjon)
  * [Oppstart](#oppstart)
  * [Prosjektet](#prosjektet)
- [:paperclip: Strukturen på filene](#paperclip-strukturen-på-filene)
- [:bookmark_tabs: Strukturen på koden](#bookmark_tabs-strukturen-på-koden)
- [:inbox_tray: Lagret data](#inbox_tray-lagret-data)
- [:mag: Sidene i navigasjonsbaren](#mag-sidene-i-navigasjonsbaren)
  * [Hjem](#hjem)
  * [Reiseplanlegger](#reiseplanlegger)
  * [Mine reiser](#mine-reiser)
  * [Min profil](#min-profil)
- [Vedlegg: Filer generert fra Gatsby Starter](#vedlegg-filer-generert-fra-gatsby-starter)


## :rocket: Introduksjon

### Oppstart

  Prosjektet er skrevet i React, og vi har brukt GatsbyJS som rammeverk. Starteren er hentet fra https://github.com/gatsbyjs/gatsby-starter-hello-world.
  
  Du finner prosjektet i Gatsby Cloud på [denne linken](https://vanir-2237233737.gtsb.io/).
  
  Du kan også få en lokal kopi ved å [laste ned Gatsby og Node.js](https://www.gatsbyjs.org/tutorial/part-zero/), klone dette repoet og kjøre:
    
    npm install
    gatsby develop
    
 Så finner du prosjektet på `http://localhost:8000`!
  
  
### Prosjektet

  Appen er utviklet av sommerstudenter i Fremtind for å tilby en oversiktlig reiseplanlegger og hjelpe brukerene å ta gode, miljøbevisste reisevalg som også er gunstige for økonomien, helsen og nærmiljøets sikkerhet. Hovedfokuset er å visualisere CO<sub>2</sub>-utslippene på en forståelig og gjenkjennelig måte, og veilede brukerene til å redusere sine utslipp. Personlige hilsener og tips sikrer en god kundeopplevelse, og kunden har mulighet til å legge inn sin egen bil for å få nøyaktige og korrekte utslippstall. På lang sikt er det tenkt at god atferd skal belønnes, og for å skape ytterligere motivasjon kan konkurranser mellom kolleger, venner og familie implementeres. 



## :paperclip: Strukturen på filene
    
    src
    ├── components
    ├── pages
    ├── styles
    ├── archive
    └── getJson.js
    
1.  **`/components`**: Inneholder alle komponentene vi har implementert i appen.

2.  **`/pages`**: Inneholder alle sidene som prosjektet bruker, f.eks. http://localhost:8000/profil

3.  **`/styles`**: Inneholder css-filene for komponentene. Bruk av egne css-filer har ikke alltid blitt praktisert, og mye styling ligger også i egne funksjoner/inline i selve komponentene.

4.  **`/archive`**: Inneholder alle komponentene vi har lagd som ikke ble brukt i første iterasjon av prosjektet. Her har vi blant annet begynt på en tidslinje for å visualisere CO<sub>2</sub>-utslipp og importering av kollektivdata fra kollektivtransporttjenesten Enturs API.

5.  **`getJson.js`**: En fil som inneholder to funksjoner for å behandle data i localStorage.



## :bookmark_tabs: Strukturen på koden

  Vi har forsøkt å ha god dokumentasjon underveis i prosjektet ved bruk av kommentarer og oversiktlig kode med selvforklarende fil- og komponentnavn. I tillegg er det delvis implementert en mappestruktur for lagring av komponentene, sortert etter deres respektive sider i navigasjonsbaren. For å få til alt av utregninger har vi en del hjelpefunksjoner. Disse ligger også under `/components`.
  
  Stylingen er hovedsaklig lagret i egne filer i mappen `/styles`. De fleste filene inneholder styling for hele sider, men enkelte inneholder kun styling for utvalgte komponenter. Navnene her er selvforklarende, og gjør det enkelt å raskt endre utseendet på de komponentene man ønsker. I noen tilfeller der det virker mest naturlig å benytte inline styling er dette benyttet, blant annet på hjulet hvor man endrer fargen ettersom man er under eller over dagens grense. 


## :inbox_tray: Lagret data

  Vi lagrer data i localStorage. Det gjør at all dataen er lagret lokalt i browseren til brukeren, så vi har lagt inn noe data på forhånd for å demonstrere komponentene. 
  
  Dictionaryen alleTurer inneholder lagrede turer generert av reiseplanleggeren, og alle lagrede turer dukker opp i siden "Mine reiser".
  
  Mesteparten av lagret data som vises på dashboardet er nå generert tilfeldig. Det inkluderer antall turer, utslipp på ulike dager og utslipp per transportmiddel. Tanken var å koble de opp mot de registrerte turene i dictionaryen alleTurer, men vi kom ikke så langt.

  Alle funksjoner som er avhengig av (ved å bruke eller sette) data i localStorage ender på -LS, feks "initalLoadOfDataLS()". Det er for å slippe å sende masse variabler opp og ned i react-hierarkiet.

  Vi fikk hjelp av Victor Danell til å lage funskjonene getJson og setJson, fordi direkte bruk av LS i pages gir build errors.
  

## :mag: Sidene i navigasjonsbaren

### Hjem
 
Hjemmesiden gir brukeren en god oversikt over sine CO<sub>2</sub>-utslipp og reisevaner, samtidig som man får et innblikk i hvor mye en viss mengde CO<sub>2</sub> faktisk er. Hjulet viser hvor godt man ligger an i forhold til sin egendefinerte maksimumsgrense for CO<sub>2</sub>, og fylles opp og fargekodes etter dette. Man kan endre grensen din ved å trykke på blyanten ved siden av den nåværende grensen. Videre følger oversikten over brukerens reisevaner. Først ut er prosentvis fordeling av det totale antallet reiser, før oversikter over utslipp og kalorier forbrent fra ulike transportmidler vises. Videre følger nok en faktaboks som viser totale tall. Nederst på hjemmesiden ligger det flere faktakort med morsomme fakta som knytter CO<sub>2</sub>-tallene til noe mer kjent. Idéen bak dette er å visualisere CO<sub>2</sub>-mengdene slik at brukerene skal lære seg og forstå hvor mye de slipper ut på grunn av sine reisevaner. 


### Reiseplanlegger

I reiseplanlegger kan du planlegge en reise fra A til B, og se nyttig statistikk om reisen, i form av avstand, tid og kaloriforbruk/CO<sub>2</sub>-utslipp. For hver reise kan du bytte mellom fire ulike fremkomstmidler, og se at informasjonen om reisen dynamisk endrer seg ut i fra valget ditt. CO<sub>2</sub>-utslipp vil vises ved bruk av bil og kollektivtransport, mens kaloriforbruk vil vises hvis man bruker sykkel eller går. Merk at Google Maps ikke har god dekning på kollektivtilbudet i Norge, og det vil derfor oppstå tilfeller der den anbefalte kollektivruten er å gå hele strekningen. Da vil CO<sub>2</sub>-utslippet oppgitt i statistikken tilsvare en bussreise for samme strekning, som kan være litt misvisende. Dette må fikses i en senere versjon.

I en ferdig versjon av appen skal reiseplanleggeren kun brukes som det navnet tilsier; en planlegger for dine fremtidige reiser. Inntil videre har vi ikke fått på plass tracking, og dine "gjennomførte" reiser må derfor lagres gjennom reiseplanlegger. Du lagrer en reise ved å velge en gyldig dato og et tidspunkt for gjennomføring og klikker på "lagre reise".


### Mine reiser
I Mine reiser vil brukeren finne en oversikt over alle sine lagrede reiser. Man kan selv velge om man ønsker å sortere etter nyligst lagt til, mest reist eller favoritter i en ferdig versjon, men for øyeblikket inneholder alle fanene de samme rutene. Rutene presenteres på ekspanderbare kort, som ekspanderes ved å trykke på det ønskede kortet. Da dukker det opp informasjon man vil kjenne igjen fra reiseplanleggeren. Merk at i denne versjonen er kartet som viser reisen kun et statisk bilde som *ikke* forandrer seg ut i fra reisedetaljer.


### Min profil
Min profil inneholder personlig informasjon og informasjon om din bil, dersom du har oppgitt at du har en bil. Denne informasjonen kan endres, og endring av bilopplysninger vil påvirke beregning av CO<sub>2</sub> i reiseplanlegger.




## Vedlegg: Filer generert fra Gatsby Starter

Oversikt over top-level-filene og mappene som ble automatisk generert av Gatsby ved oppstart av prosjektet:

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.


4.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9. **`README.md`**: A text file containing useful reference information about your project.

