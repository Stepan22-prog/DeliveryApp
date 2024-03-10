import { useState } from "react";
import Form from "./Form";
import CartItem from "./CartItem";
import CartService from "../../service/cartService";
import { validateEmail, validatePhone } from "../../validation/validation";
import './cart.css'

const cartService = new CartService();

export default function Cart({ cart, setToCart }) {
  const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [address, setAddress] = useState('');
	const [addressError, setAddressError] = useState(false);

  function validateForm() {
    let error = false;
    if (name.length < 2) {
      setNameError(true);
      error = true;
    }
    if (!validateEmail) {
      setEmailError(true);
      error = true;
    }
    if(!validatePhone) {
      setPhoneError(true);
      error = true;
    }
    if(address.length < 5) {
      setAddressError(true);
      error = true;
    }

    if (cart.length < 0) {
      error = true;
    }

    return error;
  }

  function calculateTotalPrice() {
    return cart.reduce((price, cartItem) => price + (cartItem.price * cartItem.count), 0)
  }
  
  function submitOrder() {
    if(validateForm()) {
      return;
    }

    const body = {
      name,
      email,
      phone,
      address,
      products: cart.map((cartItem) => ({productId: cartItem.id, quantity: cartItem.count})),
      totalPrice: calculateTotalPrice(),
    }

    cartService.createOrder(body);
  }

  return (
    <div className="cart">
      <div className="cart__row">
        <Form 
          name={name}
          email={email}
          phone={phone}
          address={address}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setAddress={setAddress}
          nameError={nameError}
          emailError={emailError}
          phoneError={phoneError}
          addressError={addressError}
        />
        <div className="cart-items">
          {cart.length > 0
          ? cart.map((cartItem) => <CartItem 
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.title}
            photo={cartItem.photo}
            count={cartItem.count}
            price={cartItem.price}
            setToCart={setToCart}
          />)
          : <h2>No Items</h2>}
        </div>
      </div>
      <div className="cart__bottom">
        <h2 className="cart__total-price">Total price: {calculateTotalPrice()}</h2>
        <button className="cart__button button" onClick={() => submitOrder()}>Submit</button>
      </div>
    </div>
  )
}
