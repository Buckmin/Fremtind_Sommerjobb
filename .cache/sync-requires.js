const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/a50501w/Desktop/Gatsby_Projects/fremtind-prototype/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/a50501w/Desktop/Gatsby_Projects/fremtind-prototype/src/pages/index.js"))),
  "component---src-pages-ruter-js": hot(preferDefault(require("/Users/a50501w/Desktop/Gatsby_Projects/fremtind-prototype/src/pages/ruter.js"))),
  "component---src-pages-tidslinje-js": hot(preferDefault(require("/Users/a50501w/Desktop/Gatsby_Projects/fremtind-prototype/src/pages/tidslinje.js")))
}
