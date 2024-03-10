import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Cart from '../pages/cart';
import { useState } from 'react';

export default function Router() {
  const [cart, setToCart] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Main setToCart={setToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setToCart={setToCart} />} />
    </Routes>
  )
}
