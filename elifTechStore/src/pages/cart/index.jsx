import { useState } from "react";
import Form from "./Form";
import CartItem from "./CartItem";

export default function Cart({ cart, setToCart }) {
  const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [address, setAddress] = useState('');
	const [addressError, setAddressError] = useState(false);
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
        {cart.length > 0
        ? cart.map((cartItem) => <CartItem 
          key={cartItem.id}
          title={cartItem.title}
          photo={cartItem.photo}
          count={cartItem.count}
          price={cartItem.price}
          setToCart={setToCart}
        />)
        : <h2>No Items</h2>}
      </div>
      <div className="cart__bottom">
        <div className="cart__total-price">Total price: {cart.reduce((price, cartItem) => price + (cartItem.price * cartItem.count), 0)}</div>
        <button className="cart__button">Submit</button>
      </div>
    </div>
  )
}
