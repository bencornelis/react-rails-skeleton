import React, { Component } from 'react';
import './../styles/App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
