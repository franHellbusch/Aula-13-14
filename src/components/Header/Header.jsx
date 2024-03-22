import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartContext } from "../../context/CartContext";

function Header() {
  const { cart } = useCartContext();

  return (
    <header className='header'>
      <h1>Mercado libre</h1>
      <nav className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/category/ropa'>Ropa</Link>
        <Link to='/category/tecnologia'>Tecnologia</Link>
        <Link to='/cart'>
          <ShoppingCartOutlinedIcon />
          <span>{cart.reduce((acumulador, item) => acumulador + item.quantity, 0)}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
