import {
  ItemImg,
  ItemName,
  ItemDescription,
  ItemPrice,
  StyledCard,
} from "../style";

import ActionButton from "./Button";

const Card = ({ item, buttonAction, buy, ButtonText, primary, secondary }) => {
  const { image, title, description, price } = item;

  return (
    <StyledCard>
      <ItemImg src={image} />
      <ItemName>{title}</ItemName>
      <ItemDescription>{description}</ItemDescription>
      <ItemPrice>$ {price}</ItemPrice>
      <ActionButton
        primary={primary}
        secondary={secondary}
        buttonAction={buttonAction}
        buy={buy}
      >
        {ButtonText}
      </ActionButton>
    </StyledCard>
  );
};

export default Card;
