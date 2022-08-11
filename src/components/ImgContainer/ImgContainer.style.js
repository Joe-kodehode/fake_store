import styled from "styled-components";

// styling for image container
const StyledImgContainer = styled.picture`
  /* if on store page height is 24rem, otherwise if on cart page 5rem */
  ${(props) => (props.store ? "height: 24rem" : "height: 5rem")};
  display: flex;
  justify-content: center;
  & img {
    height: 90%;
    width: 90%;
    object-fit: contain;
    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
export default StyledImgContainer;
