import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { CardContainer, Heading } from "../style";

const CartPage = () => {
  // state for storing current cart data
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // useEffect which updates localstorage each time cartData changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  // function to update cart data with all previous items minus the item removed. uses .filter to compare the passed in 'id' against all 'id's' in cartData, then returns everything minus the item with the matching id
  const handleRemove = (id) => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.id !== id)
    );
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
              store={false}
            />
          ))}
          {/* total price is calculated using .reduce to add up the sum of all item prices in cartData, then limits decimals to 2 places */}
          <h3>
            Total Price: $
            {cartData.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </h3>
        </CardContainer>
      )}
    </>
  );
};

export default CartPage;
