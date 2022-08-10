import StyledImgContainer from "./ImgContainer.style";

import { ItemImg } from "../../style";

const ImgContainer = ({ children, store }) => {
  return <StyledImgContainer store={store}>{children}</StyledImgContainer>;
};

export default ImgContainer;
