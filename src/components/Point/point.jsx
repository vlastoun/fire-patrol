import styled from 'styled-components';

const Point = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 2em;
  height: 2em;
  border-style: solid;
  border-width: 2px;
  border-radius: 2em;
  &:hover {
    cursor: pointer;
  }
`;

export default Point;
