import { useEffect, useState } from "react";
import Card from "../components/Card";
import { CardContainer, Heading } from "../style";

const CartPage = () => {
  const [cartData, setCartData] = useState();

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const handleRemove = (id) => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));

    const index = currentCart.findIndex((item) => {
      return item.id === id;
    });

    currentCart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(currentCart));
    setCartData(currentCart);
  };

  return (
    <>
      <Heading>Cart</Heading>

      {cartData && (
        <CardContainer>
          {cartData.map((item, index) => (
            <Card
              item={item}
              buttonAction={() => {
                handleRemove(item.id);
              }}
              key={index}
              buy={false}
            />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default CartPage;
