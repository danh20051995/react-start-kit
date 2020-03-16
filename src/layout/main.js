/**
 * File name: main.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2019-01-16 20:03:46
 */
/* eslint-disable */
import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Routes from '_route'

class Main extends Component {
  // constructor (props) {
  // 	super(props)
  // }

  render() {
    return (
      <main id="main" className="main">
        <Switch>
          {Routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </main>
    )
  }
}

export default Main
