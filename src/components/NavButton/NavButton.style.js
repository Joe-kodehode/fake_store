import styled from "styled-components";

const StyledNavButton = styled.button`
  height: 50px;
  width: 100px;
  cursor: pointer;
  font-size: 30px;
  border: 2px solid black;
  margin: 5px;
  border-radius: 10px;
  color: black;
  background: white;
  &:hover {
    background: grey;
  }
`;

export default StyledNavButton;
