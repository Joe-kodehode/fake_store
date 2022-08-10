import { ItemImg, ItemName, ItemPrice } from "../../style";

import { StyledCard } from "./Card.style";

import ActionButton from "../Button/Button";

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
      <ItemImg src={image} />
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
