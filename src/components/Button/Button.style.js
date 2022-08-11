import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  height: 60px;
  width: 160px;
  cursor: pointer;
  background: lime;
  border-radius: 10px;
  &:hover {
    background: green;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-4px);
  }
  font-weight: 600;
  font-size: 22px;
  font-family: sans-serif;
`;

export const StyledButtonSecondary = styled.button`
  height: 30px;
  width: 60px;
  cursor: pointer;
  background: red;
`;
