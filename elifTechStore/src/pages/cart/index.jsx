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
  const [successMessage, setSuccessMessage] = useState(null);

  function validateForm() {
    let error = false;
    if (name.length < 2) {
      setNameError(true);
      error = true;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      error = true;
    }
    if(!validatePhone(phone)) {
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
    return cart.reduce((price, cartItem) => price + (cartItem.price * cartItem.count), 0).toFixed(2);
  }
  
  async function submitOrder() {
    if(validateForm()) {
      return;
    }

    const body = {
      name,
      email,
      phone,
      address,
      products: cart.map((cartItem) => ({productId: cartItem.id, quantity: cartItem.count, price: cartItem.price})),
      totalPrice: calculateTotalPrice(),
    }

    const response = await cartService.createOrder(body);
    orderStatus(response);
  }

  function orderStatus(response) {
    if (response.orderId) {
      setSuccessMessage("success");
    } else {
      setSuccessMessage("error");
    }
    setTimeout(() => {
        setSuccessMessage(null);
    }, 3000);
  }

  return (
    <div className="cart">
      {successMessage &&
      <div className={`cart-success-message ${successMessage === "success" ? "success" : "error"}`}>
        <h2 className="cart-success-message__text">{successMessage === "success" ? "Your order has been saved successfully. Thank you!" : "An error has occurred. Try again"}</h2>
      </div>}
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
          setNameError={setNameError}
          setEmailError={setEmailError}
          setPhoneError={setPhoneError}
          setAddressError={setAddressError}
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
          : <h2>No products in cart</h2>}
        </div>
      </div>
      <div className="cart__bottom">
        <h2 className="cart__total-price">Total price: {calculateTotalPrice()} UAN</h2>
        <button className="cart__button button" onClick={() => submitOrder()}>Submit</button>
      </div>
    </div>
  )
}
