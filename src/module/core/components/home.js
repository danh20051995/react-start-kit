/**
 * File name: home.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2018-10-22 23:52:59
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoading } from '_store/actions'

class Home extends Component {
  async componentDidMount () {
    // this.props.setLoading(true)
    // try {
    //   let resp1 = await Axios.get('/test')
    //   console.log({ resp1 })

    //   let resp2 = await Axios.post('/test', { abc: 232136123 })
    //   console.log({ resp2 })
    // } catch (error) {
    //   console.log(JSON.stringify(error, null, 4))
    // }

    // setTimeout(() => {
    //   this.props.setLoading(false)
    // }, 500)
  }

  render () {
    return (
      <div className="home-page">Home page</div>
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
)(Home)
