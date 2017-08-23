import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { FETCH_REQUESTED } from '../ProjectsPage/constants';


/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {

  render() {
    return (
      <div />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch({ type: FETCH_REQUESTED }),
  };
}

const mapStateToProps = createStructuredSelector({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
