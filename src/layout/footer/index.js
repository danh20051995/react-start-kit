/**
 * File name: src\layout\footer\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-12 23:17:05
 */
import React, { Component } from 'react'

import './style.scss'

class Footer extends Component {
  render () {
    return (
      <footer id="footer" className="footer">
        &copy; {new Date().getFullYear()}
        <a href="https://github.com/danh20051995" rel="noopener noreferrer" target="_blank">danh.danh20051995@gmail.com</a>
      </footer>
    )
  }
}

export default Footer
