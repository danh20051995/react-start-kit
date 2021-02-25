/**
 * File name: src\layout\main\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-12 23:21:53
 */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Routes from '_route'

class Main extends Component {
  render () {
    return (
      <main id="main" className="main">
        <Switch>
          {Routes.map(route => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main || route.component}
            />
          ))}
        </Switch>
      </main>
    )
  }
}

export default Main
