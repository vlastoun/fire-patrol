import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
/* eslint-disable react/prefer-stateless-function */
const style = {
  NavLink: { color: 'black' },
};

const Heading = styled.p`
  color: black;
  min-width: 200px;
  font-weight: bold;
`;
const Text = styled.p`
  color: black;
  min-width: 200px;
`;
const Wrapper = styled.div`
  &:hover{
    text-decoration: underline;
  }
`;

class DisplayInfo extends React.Component {
  render() {
    const { group, name, so, id, objectCharacter } = this.props;
    return (
      <div>
        <NavLink to={`/${group}/${id}`} style={style.NavLink}>
          <Wrapper>
            <Heading>{name}</Heading>
            <Text>SO {so}</Text>
            <Text>{objectCharacter}</Text>
          </Wrapper>
        </NavLink>
      </div>
    );
  }
}

DisplayInfo.propTypes = {
};
export default DisplayInfo;
