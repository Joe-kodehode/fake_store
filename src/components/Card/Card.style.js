import styled from "styled-components";

export const StyledCard = styled.div`
  background: white;
  display: flex;
  flex-direction: ${(props) => (props.store ? "column" : "row")};
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  width: ${(props) => (props.store ? "350px" : "100%")};
  ${(props) =>
    props.store ? "border: 3px solid black" : "border-bottom: 1px black solid"};
  border-radius: 10px;

  & :first-child {
    width: ${(props) => (props.store ? "100px" : "50px")};
  }
`;
