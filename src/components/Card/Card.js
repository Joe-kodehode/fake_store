import { ItemName, ItemPrice } from "../../style";
import { StyledCard } from "./Card.style";
import ImgContainer from "../ImgContainer";
import ActionButton from "../Button/Button";
import { Link } from "react-router-dom";

// Card component, provides props to buttons/pages
const Card = ({
  item,
  buttonAction,
  store,
  ButtonText,
  primary,
  secondary,
}) => {
  const { image, title, price } = item;

  return (
    <StyledCard store={store}>
      <ImgContainer store={store}>
        <img src={image} alt="product" />
      </ImgContainer>
      <ItemName>{title}</ItemName>
      <ItemPrice>$ {price}</ItemPrice>
      <ActionButton
        primary={primary}
        secondary={secondary}
        buttonAction={buttonAction}
        store={store}
      >
        {ButtonText}
      </ActionButton>
    </StyledCard>
  );
};

export default Card;
