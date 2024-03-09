import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="header">
        <nav className="header-nav">
            <Link to="/" className="header-link">Shop</Link>
            <Link to="/cart" className="header-link">Shopping Cart</Link>
        </nav>
    </header>
  )
}
