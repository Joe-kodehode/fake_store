import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      setApiError(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <p>{data ? JSON.stringify(data) : "loading..."}</p>;
}
export default App;
