// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-profil-js": () => import("./../src/pages/profil.js" /* webpackChunkName: "component---src-pages-profil-js" */),
  "component---src-pages-ruter-js": () => import("./../src/pages/ruter.js" /* webpackChunkName: "component---src-pages-ruter-js" */),
  "component---src-pages-tidslinje-js": () => import("./../src/pages/tidslinje.js" /* webpackChunkName: "component---src-pages-tidslinje-js" */)
}

