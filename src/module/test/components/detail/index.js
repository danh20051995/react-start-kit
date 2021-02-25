/**
 * File name: detail.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:20:12
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { updateTodos, addTodo } from '_store/actions/test'
import helpers from '_util/helpers'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        _id: helpers.lowerCase(helpers.randomString(24)),
        name: '',
        status: 'open',
        description: ''
      }
    }
  }

  handleChange (key) {
    return e => {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          [key]: e.target.value
        }
      })
    }
  }

  save (e) {
    e.preventDefault()
    if (this.props.match.params.id) {
      const todos = this.props.todos.map(t => t._id === this.props.match.params.id ? this.state.formData : t)
      this.props.updateTodos(todos)
      helpers.successHandle('Update todo successfully.')
    } else {
      this.props.addTodo(this.state.formData)
      helpers.successHandle('Create todo successfully.')
      this.props.history.push('/tests')
    }
  }

  componentDidMount () {
    if (this.props.match.params.id) {
      const todo = this.props.todos.find(t => t._id === this.props.match.params.id)
      if (!todo) {
        return this.props.history.push('/404')
      }

      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          ...todo
        }
      })
    }
  }

  render () {
    if (this.state.toList === true) {
      return <Redirect to="/tests"/>
    }

    return (
      <div className="d-flex flex-column">
        <div className="col-6 offset-3">
          <h3>Test detail</h3>
          <form onSubmit={e => this.save(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={this.state.formData.name} onChange={this.handleChange('name')} className="form-control" placeholder="Name..."/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" value={this.state.formData.description} onChange={this.handleChange('description')} className="form-control" placeholder="Description..."/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button onClick={() => this.props.history.push('/tests')} className="ml-2 btn btn-warning">Back</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.test.todos
})

const mapDispatchToProps = dispatch => ({
  updateTodos: todos => dispatch(updateTodos(todos)),
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
