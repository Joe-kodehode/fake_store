import styled from "styled-components";

export const StyledCard = styled.section`
  background: white;
  display: flex;
  flex-direction: ${(props) => (props.store ? "column" : "row")};
  align-items: center;
  padding: 10px;
  margin: 20px;
  width: ${(props) => (props.store ? "350px" : "100%")};
  ${(props) => !props.store && "height:100px"};
  ${(props) =>
    props.store ? "border: 3px solid black" : "border-bottom: 1px black solid"};
  gap: 15px;
  border-radius: 10px;
  ${(props) => props.store && "& :nth-child(3) { margin-top: auto; }"}
  ${(props) => !props.store && "& :nth-child(3) { margin-left: auto; }"}
`;
