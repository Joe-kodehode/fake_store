import { Link } from "react-router-dom";
import NavButton from "../NavButton";
import StyledNavbar from "./Nav.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/store-page">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/cart-page">
        <NavButton>Cart</NavButton>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
