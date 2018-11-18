import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navugation } from './Navigation'
import { Home, ContextApi } from '../../pages'

const pages = [
  {title: `Home`, url: `/`},
  {title: `React Context Api`, url: `context-api`},
]

const Router = () => (
  <Router>
    <>
      
      <Navigation pages={pages} />
      <Switch>
        <Route exact component={Home}       path="/"/>
        <Route exact component={ContextApi} path="/context-api"/>
      </Switch>
    </>
  </Router>
)

export Router
