import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// load bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// load react-toastify: https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Main from '_layout/main'
import Footer from '_layout/footer'
import Header from '_layout/header'
import Loading from '_layout/loading'

import { setLoading } from '_store/actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.renderLoading = this.renderLoading.bind(this)
  }

  componentDidMount () {
    // setInterval(() => toast('Wow so easy ! ' + Math.random()), 1500)
  }

  renderLoading () {
    if (this.props.loading) {
      return <Loading/>
    }
    return ''
  }

  render () {
    return (
      <div id="app" className="app">
        <Header/>
        <Main/>
        <Footer/>
        {this.renderLoading()}
        <ToastContainer/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
