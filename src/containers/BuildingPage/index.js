import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as R from 'ramda';
import PageTemplate from '../../components/PageTemplate';
import { selectObjects } from './selectors';

const BuildingPage = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const building = R.find(R.propEq('id', id), props.objects)
  return (
    < PageTemplate >
      <h1>Building page</h1>
    </PageTemplate >
  );
};

BuildingPage.propTypes = {
  match: PropTypes.object.isRequired,
  objects: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  objects: selectObjects(),
});

export default connect(mapStateToProps, null)(BuildingPage);
