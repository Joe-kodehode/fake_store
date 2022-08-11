import styled from "styled-components";

// Styling for cards. boolean used to check if 'store' prop is true or false, (if true, styling for store page is used, if false styling for cart is used) styling will differ depending on answer.
export const StyledCard = styled.section`
  /* shared properties */
  background: white;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;

  /* properties decided using 'store' prop to decide if returned style will be for store or cart page */
  flex-direction: ${(props) => (props.store ? "column" : "row")};
  width: ${(props) => (props.store ? "350px" : "100%")};
  ${(props) => !props.store && "height:100px"};
  ${(props) =>
    props.store ? "border: 3px solid black" : "border-bottom: 1px black solid"};
  gap: 15px;
  ${(props) => props.store && "& :nth-child(3) { margin-top: auto; }"}
  ${(props) => !props.store && "& :nth-child(3) { margin-left: auto; }"}
`;
