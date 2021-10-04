import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer id="footer" className="footer">
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;
        <a href="https://github.com/danh20051995" rel="noopener noreferrer" target="_blank">danh.danh20051995@gmail.com</a>
      </footer>
    )
  }
}

export default Footer
