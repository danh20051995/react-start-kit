/**
* File name: 403.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2018-10-23 23:01:37
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoading } from 'store/actions'

class Forbidden extends Component {
  // constructor (props) {
  // 	super(props)
  // }

  render() {
    return (
      <div className="forbidden">Permission denied</div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  setLoading: loading => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Forbidden)