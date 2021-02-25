/**
 * File name: list.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:19:22
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { setLoading } from '_store/actions'
import TodoAPI from '_api/todo'
import helpers, { successHandle, errorHandle } from '_util/helpers'
import Pagination from '_components/pagination'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    const { page } = qs.parse(this.props.location.search)
    this.fetchTodos(page)
  }

  async fetchTodos (page) {
    this.props.setLoading(true)
    try {
      const { data } = await TodoAPI.getItems({
        page: Number(page) >= 1 ? page : 1
      })

      this.setState({
        ...this.state,
        ...data,
        items: data.docs
      })

      this.props.history.replace({
        path: this.props.location.pathname,
        search: qs.stringify({
          ...qs.parse(this.props.location.search),
          page: data.page
        })
      })
    } catch (error) {
      errorHandle(error)
    }
    this.props.setLoading(false)
  }

  async updateStatus ({ _id, status }) {
    this.props.setLoading(true)
    try {
      await TodoAPI.status({ _id, status: status === 'open' ? 'close' : 'open' })
      this.setState({
        ...this.state,
        items: helpers.ensureArray(this.state.items).map(td => {
          if (td._id === _id) {
            td.status = status === 'open' ? 'close' : 'open'
          }
          return td
        })
      })
      successHandle('Update todo successfully.')
    } catch (error) {
      errorHandle(error)
    }
    this.props.setLoading(false)
  }

  async remove (_id) {
    this.props.setLoading(true)
    try {
      await TodoAPI.remove({ _id })
      this.setState({
        ...this.state,
        items: this.state.items.filter(e => e._id !== _id)
      })
      successHandle('Remove todo successfully.')
    } catch (error) {
      errorHandle(error)
    }
    this.props.setLoading(false)
  }

  render () {
    let pagination = ''
    if (this.state.pages > 1) {
      pagination = (<Pagination page={this.state.page} pages={this.state.pages} paging={page => this.fetchTodos(page)}/>)
    }

    return (
      <div className="todo-list">
        <button onClick={() => this.props.history.push('/todos/create')} className="mb-2 btn btn-sm btn-outline-primary">Create new</button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {helpers.ensureArray(this.state.items).map((todo, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{todo._id}</th>
                  <td>{todo.title}</td>
                  <td>
                    <a href="javascript:void(0)" onClick={() => this.updateStatus(todo)} className={todo.status === 'open' ? 'badge badge-primary' : 'badge badge-success'}>{todo.status}</a>
                  </td>
                  <td>{todo.description}</td>
                  <td>
                    <button onClick={() => this.props.history.push('/todos/' + todo._id)} className="btn btn-sm btn-outline-info">Edit</button>
                    <button onClick={() => this.remove(todo._id)} className="ml-1 btn btn-sm btn-outline-danger">Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {pagination}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  setLoading: loading => dispatch(setLoading(loading))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
