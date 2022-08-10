import { Route, Routes } from "react-router";
import "./App.css";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App-backGround">
      <Navbar />
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/store-page" element={<StorePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;
