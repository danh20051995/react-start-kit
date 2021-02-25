/**
 * File name: src\store\reducers\auth.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-27 16:47:12
 */
import { LOGIN, LOGOUT } from '_constants'

export const initState = {
  credentials: {
    isAuthenticated: null
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        credentials: action.value
      }
      break
    case LOGOUT:
      state = {
        ...state,
        credentials: {}
      }
      break
    default:
      return state
  }

  return state
}

export default reducer
