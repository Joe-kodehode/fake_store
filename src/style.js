import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 3rem;
  letter-spacing: 24px;
  text-shadow: 2px 2px #ff0000;
`;

const CardContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export { Heading, CardContainer, ItemDescription, ItemName, ItemPrice };
