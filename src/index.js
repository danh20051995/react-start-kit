
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from '_store'
import registerServiceWorker from './registerServiceWorker'

// import CSS, scss
import '_style/App.scss'
import '_style/Helper.scss'
import '_style/Loading.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
