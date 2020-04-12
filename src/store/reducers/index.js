/**
 * File name: index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-22 22:50:32
 */
import helpers from '_util/helpers'

/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

/* import main reducer load sync */
import auth from '_store/reducers/auth'

const initialState = {
  loading: false,
  todos: Array.from(new Array(10), () => ({
    _id: helpers.lowerCase(helpers.randomString(24)),
    name: 'name: ' + helpers.lowerCase(helpers.randomString(50)),
    status: 'open',
    description: 'description: ' + helpers.lowerCase(helpers.randomString(150))
  }))
}

const root = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.value }
    case 'UPDATE_TODOS':
      return { ...state, todos: action.value }
    case 'ADD_TODO':
      return { ...state, todos: [ ...state.todos, action.value ] }
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(t => t._id !== action.value) }
    default:
      return state
  }
}

const history = createBrowserHistory()
const reducers = combineReducers({
  router: connectRouter(history),
  root,
  auth
})

export default reducers
