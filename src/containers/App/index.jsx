import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {Links} from '../../components/Links';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {

  render() {
    return (
      <div>
        <Links />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
