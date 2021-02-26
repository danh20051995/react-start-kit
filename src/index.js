
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

// import multiple languages
import '_i18n' // uncomment to use

// import CSS, scss
import '_style'

// load firebase
// import '_util/firebase' // uncomment to use

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
registerServiceWorker()
