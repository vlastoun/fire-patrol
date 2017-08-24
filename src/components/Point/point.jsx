import styled from 'styled-components';
/* eslint-disable prefer-template */
const Point = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => (props.coefficient * 35) + 'px'};
  height: ${(props) => (props.coefficient * 35) + 'px'};
  border-style: solid;
  border-width: 2px;
  border-radius: ${(props) => (props.coefficient * 35) + 'px'};
  &:hover {
    cursor: pointer;
  }
`;

export default Point;
