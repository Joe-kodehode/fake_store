import styled from "styled-components";

const StyledImgContainer = styled.picture`
  ${(props) => (props.store ? "height: 24rem" : "height: 5rem")};
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
export default StyledImgContainer;
