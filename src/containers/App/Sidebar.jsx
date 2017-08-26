import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SIDEBAR_WIDTH = '180px';

const Wrapper = styled.div`
width: ${SIDEBAR_WIDTH};
height: 100%;
float: left
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
background-color: grey;
`;

const Sidebar = (props) => (
  props.visible
    ? (
      <Wrapper>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </Wrapper>
    )
    : null
);

Sidebar.propTypes = {
  visible: PropTypes.bool,
};

Sidebar.defaultProps = {
  visible: true,
};

export default Sidebar;
