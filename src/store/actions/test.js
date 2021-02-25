
export const updateTodos = todos => ({
  type: 'UPDATE_TODOS',
  value: todos
})

export const addTodo = todo => ({
  type: 'ADD_TODO',
  value: todo
})

export const removeTodo = _id => ({
  type: 'REMOVE_TODO',
  value: _id
})

export default {
  updateTodos,
  addTodo,
  removeTodo
}
