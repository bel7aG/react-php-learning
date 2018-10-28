import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Home, Main, PracticalWorkFile, NotFound } from '../components';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/practicle-work" component={PracticalWorkFile} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
