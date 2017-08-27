import styled from 'styled-components';
/* eslint-disable prefer-template */
const Point = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => (props.coefficient * 40) + 'px'};
  height: ${(props) => (props.coefficient * 40) + 'px'};
  border-color: ${(props) => (props.active ? 'red' : 'black')};
  border-style: solid;
  border-width: 2px;
  border-radius: ${(props) => (props.coefficient * 40) + 'px'};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  font-size: ${(props) => (props.coefficient * 40) + 'px'};
  font-color: black;
  &:hover {
    cursor: pointer;
    border-color: red;
  }
`;

export default Point;
