/**
 * File name: index,js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-22 22:49:44
 */

export const setLoading = value => ({
  type: 'LOADING',
  value: value || false
})

export const updateTodos = todos => ({
  type: 'UPDATE_TODOS',
  todos
})

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const removeTodo = _id => ({
  type: 'REMOVE_TODO',
  _id
})
