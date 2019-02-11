/**
* File name: index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2018-10-22 22:50:32
*/

const initialState = {
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: action.value }
    default:
      return state
  }
}

export default rootReducer
