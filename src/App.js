import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";
import { NavButton } from "./style";

function App() {
  return (
    <div className="App-backGround">
      <Link to="/store-page">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/cart-page">
        <NavButton>Cart</NavButton>
      </Link>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/store-page" element={<StorePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;
