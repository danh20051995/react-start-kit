/**
 * File name: index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-22 22:50:32
 */

/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

// eslint-disable-next-line
import Reducers from './[!index]*.js' // autoload all reducer except index.js

const initialState = {
  loading: false
}

const root = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.value }
    default:
      return state
  }
}

const history = createBrowserHistory()
const reducers = combineReducers({
  router: connectRouter(history),
  root,
  ...Reducers.reduce(
    (reducers, { name, reducer }) => ({
      ...reducers,
      [name]: reducer
    }), {}
  )
})

export default reducers
