// import jquery from 'jquery'

/* eslint-disable import/first */
// eslint-disable-next-line
// window.jQuery = window.$ = jquery

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from 'store'

// Fix popper.js bootstrap 4.0
// import 'popper.js/dist/umd/popper'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

// import CSS, scss
import './styles/App.scss'
import './styles/Helper.scss'
import './styles/Loading.scss'

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()
