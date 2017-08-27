import styled from 'styled-components';
/* eslint-disable prefer-template */
const Number = styled.span`
  color: black;
  font-size: ${(props) => (props.coefficient * 22) + 'px'};
  position: absolute;
  top: 50;
  right: 50;
`;

export default Number;
