import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemImg = styled.img`
  max-height: 300px;
  max-width: 200px;
`;

const ItemDescription = styled.p`
  text-align: center;
  font-size: 20px;
`;
const ItemPrice = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

const ItemName = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export {
  Heading,
  CardContainer,
  ItemImg,
  ItemDescription,
  ItemName,
  ItemPrice,
};
