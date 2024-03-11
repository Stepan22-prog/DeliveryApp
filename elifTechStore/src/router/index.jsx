import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Cart from '../pages/cart';
import { useEffect, useState } from 'react';

export default function Router() {
  const [cart, setToCart] = useState([]);

  useEffect(() => {
    const dataInStorage = localStorage.getItem('cart');
    if (dataInStorage && dataInStorage.length > 0) {
      setToCart(JSON.parse(dataInStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route path="/" element={<Main cart={cart} setToCart={setToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setToCart={setToCart} />} />
    </Routes>
  )
}
