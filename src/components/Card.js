import {
  ItemImg,
  ItemName,
  ItemDescription,
  ItemPrice,
  StyledCard,
} from "../style";

import ActionButton from "./Button";

const Card = ({ item, buttonAction, buy }) => {
  const { image, title, description, price } = item;

  return (
    <StyledCard>
      <ItemImg src={image} />
      <ItemName>{title}</ItemName>
      <ItemDescription>{description}</ItemDescription>
      <ItemPrice>$ {price}</ItemPrice>
      <ActionButton buttonAction={buttonAction} buy={buy} />
    </StyledCard>
  );
};

export default Card;
