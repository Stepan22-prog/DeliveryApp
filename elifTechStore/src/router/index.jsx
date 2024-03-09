import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Cart from '../pages/cart';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}
