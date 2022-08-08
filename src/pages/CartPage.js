import { useEffect, useState } from "react";
import Card from "../components/Card";
import { CardContainer, Heading } from "../style";

const CartPage = () => {
  const [cartData, setCartData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // const calculateTotal = () => {

  // };

  useEffect(() => {
    if (cartData) {
      setTotalPrice(0);
      cartData.forEach((item, i) => {
        setTotalPrice(totalPrice + item.price);
      });
    }
  }, [cartData]);

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
              secondary
              ButtonText="Remove"
              key={index}
              buy={false}
            />
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </CardContainer>
      )}
    </>
  );
};

export default CartPage;
