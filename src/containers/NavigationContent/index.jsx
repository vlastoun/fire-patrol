import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { selectGroups, selectObjects } from './selectors';
import { HOVERING_ON_ID, HOVERING_STOPPED } from '../../constants';
import CleverContent from './CleverContent';

const Heading = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  padding-top: 0.4em
`;


const Wrapper = styled.div`
`;

const style = {
  active: { fontWeight: 900 },
};


const NavigationContent = (props) => {
  const navigationSublist = (objects, id) => {
    const sublist = R.filter(R.propEq('group', id), objects);
    return (
      <div>
        {sublist.map((object) => (
          <NavLink key={object.id} to={`/building/${object.id}`} exact activeStyle={style.active}>
            <CleverContent
              group={object.group}
              id={object.id}
              handleMouseEnter={props.handleMouseEnter}
              handleMouseLeave={props.handleMouseLeave}
            >
              {object.label} {object.name}
            </CleverContent>
          </NavLink>
        ))}
      </div>
    );
  };

  return (
    <Wrapper>
      {props.groups.map((group) => (
        <div key={group.id}>
          <Heading>PC {group.unit} - {group.name}</Heading>
          {navigationSublist(props.objects, group.id)}
        </div>
      ))}
    </Wrapper>
  );
};


NavigationContent.propTypes = {
  objects: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

const mapStateToProps = () => createStructuredSelector({
  objects: selectObjects(),
  groups: selectGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleMouseEnter: (id) => dispatch({ type: HOVERING_ON_ID, id }),
    handleMouseLeave: () => dispatch({ type: HOVERING_STOPPED }),
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationContent));
