import Input from "../../../shared/Input";
import './cartItem.css';

export default function CartItem({ id, title, photo, count, price, setToCart }) {
  function updatePrice(count) {
    setToCart((prevValue) => {
      return prevValue.map(
        (cartItem) => cartItem.id === id ? {...cartItem, count} : cartItem
      )
    })
  }

  function deleteItem() {
    setToCart(prevValue => prevValue.filter(currentItem => currentItem.id !== id))
  }

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={photo} alt={title} />
      </div>
      <div className="cart-item-info">
        <h2 className="cart-item-info__title">{title}</h2>
        <div className="cart-item-count">
          <button className="cart-item-count__btn button" onClick={() => updatePrice(count + 1)}>+</button>
          <Input
            id="count"
            type="number"
            value={count}
            setValue={(value) => updatePrice(value)}
          />
          <button className="cart-item-count__btn button" onClick={() => updatePrice(count - 1)}>-</button>
        </div>
        <div className="cart-item-info__row">
          <h3 className="cart-item-info__price">{(count * price).toFixed(2)}</h3>
          <button className="cart-item-info__delete" onClick={() => deleteItem()}>delete</button>
        </div>
      </div>
    </div>
  )
}
