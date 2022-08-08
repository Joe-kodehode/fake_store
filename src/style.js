import styled from "styled-components";

const NavButton = styled.button`
  height: 50px;
  width: 100px;
  cursor: pointer;
  font-size: 30px;
`;

const Heading = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  margin: 20px;
  width: 300px;
  border: black;
  border-radius: 2px black solid;
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
  StyledCard,
  CardContainer,
  ItemImg,
  ItemDescription,
  ItemName,
  ItemPrice,
  NavButton,
};
