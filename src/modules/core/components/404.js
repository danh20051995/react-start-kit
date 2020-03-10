/**
* File name: 404.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2018-10-23 00:13:04
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoading } from '_store/actions'

class Notfound extends Component {
  // constructor (props) {
  // 	super(props)
  // }

  render() {
    return (
      <div className="not-found">Page not fount</div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  setLoading: loading => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notfound)