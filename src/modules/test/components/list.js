/**
* File name: list.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-16 22:19:22
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodos, removeTodo } from '_store/actions'
import { successHandle, errorHandle } from '_utils/helpers'
import '_styles/Test.scss'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  updateStatus ({ _id, status }) {
    let todos = this.props.todos.map(t => t._id === _id ? { ...t, status: status === 'open' ? 'close' : 'open' } : t)
    this.props.updateTodos(todos)
  }

  remove (todo) {
    let confirm = window.confirm()
    if (confirm) {
      this.props.removeTodo(todo._id)
      successHandle('Remove todo successfully.')
    }
  }

  render() {
    return (
      <div className="todo-list">
        <button onClick={() => this.props.history.push('/tests/create')} className="mb-2 btn btn-sm btn-outline-primary">Create new</button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.props.todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{todo._id}</td>
                  <td>{todo.name}</td>
                  <td>
                    <a href="javascript:void(0)" onClick={() => this.updateStatus(todo)} className={todo.status === 'open' ? 'badge badge-primary' : 'badge badge-success'}>{todo.status}</a>
                  </td>
                  <td>{todo.description}</td>
                  <td className="oneline-text">
                    <button onClick={() => this.props.history.push('/tests/' + todo._id)} className="btn btn-sm btn-outline-info">Edit</button>
                    <button onClick={() => this.remove(todo)} className="ml-1 btn btn-sm btn-outline-danger">Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  updateTodos: todos => dispatch(updateTodos(todos)),
  removeTodo: _id => dispatch(removeTodo(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
