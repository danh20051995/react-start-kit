
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from '_store'
import registerServiceWorker from './registerServiceWorker'

// import multiple languages
// import '_i18n' // uncomment to use

// import CSS, scss
import '_style/App.scss'
import '_style/Helper.scss'

// load firebase
// import '_util/firebase' // uncomment to use

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
