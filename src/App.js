import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <p>{data ? JSON.stringify(data) : "loading..."}</p>;
}
export default App;
