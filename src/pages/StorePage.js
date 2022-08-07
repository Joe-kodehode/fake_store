// 1. create states to store data from API and if an error occours(boolean)
// 2. fetch data from API
// 3.HTML which loads if data = true. & html for if an error occours & html for if neither occour (loading)
// 4. display data from API in the html (.map   card for each piece of data,  key=data.id)
// 5. style the data
// 6. buttons for saving an item's data to localstorage
// 7. cart page (html will be similar to store page but using the data from localstorage instead of from API, remember to parse the JSON so the browser can read it and store it in a variable, "renderedCart")
// 8. total price functionality

import { useEffect, useState } from "react";
import Card from "../components/Card";
import { CardContainer, Heading } from "../style";

const StorePage = () => {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    } catch ({ message }) {
      setApiError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBuy = (item) => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentCart) currentCart = [];
    localStorage.setItem("cart", JSON.stringify([...currentCart, item]));
  };

  return (
    <>
      <Heading>Fake Store</Heading>
      {data && (
        <CardContainer>
          {data.map((item) => (
            <Card
              item={item}
              buy
              key={item.id}
              buttonAction={() => {
                handleBuy(item);
              }}
            />
          ))}
        </CardContainer>
      )}

      {apiError && <h1>{apiError}</h1>}
      {isLoading && <Heading>...Loading</Heading>}
    </>
  );
};

export default StorePage;
