<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <h1> Vanir </h1>
    <h3> Sommerstudentene under SPINN </h3>
    <h3> Fremtind </h3>

</p>

## 🚀 Intro

**Oppstart.**

  Prosjektet er skrevet i React, og vi har brukt GatsbyJS for alt backend. Starteren er hentet fra https://github.com/gatsbyjs/gatsby-starter-hello-world.

  Du finner prosjeket på LINK, eller du kan laste ned GatsbyJS, deretter dette repoet og kjøre:

    ```
    npm install
    gatsby develop
    ```
  Så finner du produktet på `http://localhost:8000`!


## 🚀 Strukturen på filene

  ├──src/

  ├──├────components - de enkelte komponentene vi har implementert. Inneholder både komponenter vi bruker og noen vi har skrotet

  ├──├────pages - alle sidene som repoet har. altså feks http://localhost:8000/profil

  ├──├────styles - standard styling i css-filer for komponentene. en del er stylet in-line i react-stil, mens mye ligger her i styles




## 🚀 Strukturen på koden

  Vi har forsøkt å ha god dokumentasjon underveis i prosjektet ved kommentarer, oversiktlig kode med gode filnavn/komponentnavn.

  For å få til alt av utregninger har vi en del hjelpefunksjoner her og der. Strukturen på hvor disse ligger er ikke godt gjennomtenkt.





## Lagret data

  Vi lagrer data i localStorage. Det gjør at all dataen er lagret lokalt i browseren til brukerer, så vi har noe data på forhånd for å demonstrere komponentene. Mesteparten av lagret data er nå randomgenerert. Det inkluderer antall turer, utslipp på ulike dager og utslipp per transportmiddel. Tanken var å koble de opp mot de registrerte turene i dictionaryen alleTurer, men vi kom ikke så langt.

  Alle funksjoner som er avhengig av (ved å bruke eller sette) data i localStorage ender på -LS, feks "initalLoadOfDataLS()". Det er for å slippe å sende masse variabler opp og ned i react-hierarkiet.

  Vi fikk hjelp av Victor til å lage getJson og setJson, fordi direkte bruk av LS i pages gir build errors.




## 🧐 What's inside?

Denne er fra gatsby-starter-hello-world, tenker den er kjekk å ha:

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
