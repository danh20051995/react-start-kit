/**
 * File name: detail.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 22:20:12
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setLoading } from '_store/actions'
import TodoAPI from '_api/todo'
import { successHandle, errorHandle } from '_util/helpers'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        title: '',
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

  async save (e) {
    e.preventDefault()
    this.props.setLoading(true)
    try {
      const sendData = this.state.formData
      // let { data } = await TodoAPI.store(sendData)
      await TodoAPI.store(sendData)
      successHandle('Save todo successfully.')
      this.setState({
        ...this.state,
        toList: true
      })
    } catch (error) {
      errorHandle(error)
    }
    this.props.setLoading(false)
  }

  async componentDidMount () {
    if (this.props.match.params.id) {
      this.props.setLoading(true)
      try {
        const { data } = await TodoAPI.getItem({ _id: this.props.match.params.id })
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            ...data
          }
        })
      } catch (error) {
        errorHandle(error)
      }
      this.props.setLoading(false)
    }
  }

  render () {
    if (this.state.toList === true) {
      return <Redirect to="/todos"/>
    }

    return (
      <div className="d-flex flex-column">
        <div className="col-6 offset-3">
          <h3>Todo detail</h3>
          <form onSubmit={e => this.save(e)}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={this.state.formData.title} onChange={this.handleChange('title')} className="form-control" placeholder="Title..."/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" value={this.state.formData.description} onChange={this.handleChange('description')} className="form-control" placeholder="Description..."/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
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
)(Detail)
