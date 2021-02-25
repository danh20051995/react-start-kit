import helpers from '_util/helpers'

export const initState = {
  todos: Array.from(new Array(10), () => ({
    _id: helpers.lowerCase(helpers.randomString(24)),
    name: 'name: ' + helpers.lowerCase(helpers.randomString(50)),
    status: 'open',
    description: 'description: ' + helpers.lowerCase(helpers.randomString(150))
  }))
}

const reducer = (state = initState, action) => {
  switch (action.type) {
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

export default reducer
