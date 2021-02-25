/**
 * File name: src\layout\header\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-12 23:18:55
 */
import React, { Component } from 'react'
import { matchPath, withRouter, Link } from 'react-router-dom'
import Routes from '_route'

class Header extends Component {
  constructor (props) {
    super(props)
    this.activeClassName = this.activeClassName.bind(this)
  }

  activeClassName (path) {
    const isActive = matchPath(this.props.location.pathname, path)
    return isActive && isActive.isExact ? 'active' : ''
  }

  render () {
    return (
      <header id="header" className="header">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {/* <li>
            <Link to="/" className={this.activeClassName('/')}>Home</Link>
          </li>
          <li>
            <Link to="/bubblegum" className={this.activeClassName('/bubblegum')}>Bubblegum</Link>
          </li>
          <li>
            <Link to="/shoelaces" className={this.activeClassName('/shoelaces')}>Shoelaces</Link>
          </li> */}

          {Routes.map((route, index) => {
            if (route.label) {
              return (
                <li key={index}>
                  <Link to={route.path} className={this.activeClassName(route.path)}>{route.label}</Link>
                </li>
              )
            }
          })}

          {/* {Routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))} */}
        </ul>
      </header>
    )
  }
}

export default withRouter(Header)
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
