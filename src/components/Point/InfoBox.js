import styled from 'styled-components';

const InfoBox = styled.div`
  position: absolute;
  z-index: 50;
  right: 100%;
  bottom: 100%;
  background-color: white;
  margin: 5px;
  padding: 0.25em;
  color: black;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

export default InfoBox;
