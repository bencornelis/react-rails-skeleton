import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Main);
