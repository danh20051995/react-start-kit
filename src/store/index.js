/**
 * File name: src\store\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-27 16:41:11
 */
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import reducers from '_store/reducers'

// https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
const browserHistory = createBrowserHistory()

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(
      applyMiddleware(routerMiddleware(browserHistory))
    )
  }

  return applyMiddleware(routerMiddleware(browserHistory))
}

const store = createStore(reducers, {}, getMiddleware())

export default store
