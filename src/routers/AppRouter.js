import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Home, PracticalWorkFile, NotFound } from './components';

export default class AppRouter extends Component {
  <React.Fragment>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/practicle-work" component={PracticalWorkFile} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
}
