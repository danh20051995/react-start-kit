/**
 * File name: footer.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 20:03:16
 */
import React, { Component } from 'react'
import { toast } from 'react-toastify'

class Footer extends Component {
  // constructor (props) {
  // 	super(props)
  // }

  componentDidMount() {
    // setInterval(() => toast('Notify from footer ! ' + Math.random()), 1500)
  }

  render() {
    return (
      <footer id="footer" className="footer">
        &copy; {new Date().getFullYear()}
        <a href="https://github.com/danh20051995" rel="noopener noreferrer" target="_blank">danh.danh20051995@gmail.com</a>
      </footer>
    )
  }
}

export default Footer
