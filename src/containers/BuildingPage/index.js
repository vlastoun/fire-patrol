import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PageTemplate from '../../components/PageTemplate';
import {selectBuilding} from './selectors';
import {GET_CORRECT_BUILDING} from '../../constants';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class BuildingPage extends React.Component {
  componentWillMount(){
    const id = parseInt(this.props.match.params.id, 10);
    this.props.getCorrectBuilding(id);
  }
  render() {
    return (
      <PageTemplate>
        <h1>Building page</h1>
      </PageTemplate>
    );
  }
}

BuildingPage.propTypes = {
  match: PropTypes.object.isRequired,
  getCorrectBuilding: PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    getCorrectBuilding: (id) => dispatch({type: GET_CORRECT_BUILDING, id}),
  };
}
const mapStateToProps = createStructuredSelector({
  building: selectBuilding(),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingPage);
