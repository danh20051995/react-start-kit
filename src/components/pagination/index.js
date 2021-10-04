import React, { Component } from 'react'

class Pagination extends Component {
  handlePaging (page) {
    if (typeof this.props.paging === 'function' && page !== this.props.page && page >= 1 && page <= this.props.pages) {
      this.props.paging(page)
    }
  }

  generatePages () {
    const result = [
      <li key="first" className="page-item">
        <a className="page-link" onClick={() => this.handlePaging(this.props.page - 1)} href="javascript:void(0)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
    ]

    for (let index = 1; index <= this.props.pages; index++) {
      result.push(
        <li key={index} className={'page-item ' + (index === this.props.page ? 'active' : '')}>
          <a className="page-link" onClick={() => this.handlePaging(index)} href="javascript:void(0)">{index}</a>
        </li>
      )
    }

    result.push(
      <li key="last" className="page-item">
        <a className="page-link" onClick={() => this.handlePaging(this.props.page + 1)} href="javascript:void(0)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    )

    return result
  }

  render () {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {this.generatePages()}
        </ul>
      </nav>
    )
  }
}

export default Pagination
