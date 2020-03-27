/**
 * File name: src\store\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-27 16:41:11
 */
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ensureArray } from '_util/helpers'
import reducers from '_store/reducers'

const middleware = history => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(
      applyMiddleware(routerMiddleware(history))
    )
  }

  return applyMiddleware(routerMiddleware(history))
}

const store = createStore(reducers, /* preloadedState, */ composeWithDevTools(
  applyMiddleware(...ensureArray(middleware, [ middleware ]))
))

export default store
