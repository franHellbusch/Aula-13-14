import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <h1>Mercado libre</h1>
      <nav className='navigation'>
        <Link to='/'>Home</Link>
      </nav>
    </header>
  );
}

export default Header;
