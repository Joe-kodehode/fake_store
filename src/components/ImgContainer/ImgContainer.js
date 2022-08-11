import StyledImgContainer from "./ImgContainer.style";

// container for the image within the card
const ImgContainer = ({ children, store }) => {
  return <StyledImgContainer store={store}>{children}</StyledImgContainer>;
};

export default ImgContainer;
