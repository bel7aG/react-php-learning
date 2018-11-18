import React from 'react'
import { Navigation } from '../'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, ContextApi } from '../../pages'

const pages = [
  {title: `Home`, url: `/`},
  {title: `ContextApi`, url: `/react-context`}
]

const Router = () => (
  <BrowserRouter>
    <>
      <Navigation pages={pages} />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={ContextApi} path="/react-context" />
      </Switch>
    </>
  </BrowserRouter>
)

      export default Router
