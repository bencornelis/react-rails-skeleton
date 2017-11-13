import React, { Component } from 'react';
import './../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </div>
  )
}

export default App;
