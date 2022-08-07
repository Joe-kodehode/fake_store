import {
  BuyButton,
  ItemImg,
  ItemName,
  ItemDescription,
  ItemPrice,
  StyledCard,
} from "../style";

const Card = ({ item, buy, buttonAction }) => {
  const { image, title, description, price } = item;

  return (
    <StyledCard>
      <ItemImg src={image} />
      <ItemName>{title}</ItemName>
      <ItemDescription>{description}</ItemDescription>
      <ItemPrice>$ {price}</ItemPrice>
      <BuyButton onClick={buttonAction}>{buy ? "Buy" : "Remove"}</BuyButton>
    </StyledCard>
  );
};

export default Card;
