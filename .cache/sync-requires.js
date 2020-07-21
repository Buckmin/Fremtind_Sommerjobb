const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/index.js"))),
  "component---src-pages-profil-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/profil.js"))),
  "component---src-pages-routes-favoritter-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/routes/favoritter.js"))),
  "component---src-pages-routes-mest-reist-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/routes/mestReist.js"))),
  "component---src-pages-routes-nylige-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/routes/nylige.js"))),
  "component---src-pages-ruter-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/ruter.js"))),
  "component---src-pages-tidslinje-js": hot(preferDefault(require("/Users/bruker/GitHub/fremtind-prototype/src/pages/tidslinje.js")))
}

