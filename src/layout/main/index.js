import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '@/router'

class Main extends Component {
  render () {
    return (
      <main id="main" className="main">
        <Switch>
          {routes.map(route => (
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
