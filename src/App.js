import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store'

// load react-toastify: https://www.npmjs.com/package/react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Main from '@/layout/main'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import Loading from '@/components/loading'

import { setLoading } from '@/store/actions'
// import Logo from '_static/logo.png'

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

const AppWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      {/* <img src={Logo}/> */}
      <AppWithStore/>
    </BrowserRouter>
  </Provider>
)
