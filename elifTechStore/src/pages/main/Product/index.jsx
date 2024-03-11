import heartSvg from '../../../assets/heart.svg';
import heartWithBackSvg from '../../../assets/heart-background.svg';
import './product.css';

export default function Product({id, cart, title, img, price, date, setToCart, favorite, setFavorites}) {
  function checkProductInCart(id, cart) {
    return cart.some((cartItem) => cartItem.id === id);
  }

  return (
    <div className="product">
        <button className="product__favorite" onClick={() => setFavorites(prevState => [...prevState, id])}><img src={favorite ? heartWithBackSvg : heartSvg} alt="Add to favorite" /></button>
        <div className="product__img">
            <img src={img} alt={title} />
        </div>
        <h2 className="product__title">{title}</h2>
        <div className="product__row">
            <h3 className="product__price">{price.toFixed(2)} грн</h3>
            <button disabled={checkProductInCart(id, cart)} onClick={() => setToCart(prevState => [...prevState, {id, title, photo: img, price, count: 1}])} className="product__btn button">{ checkProductInCart(id, cart) ? 'In cart' : 'Add to Cart'}</button>
        </div>
        <div className="product__date">Added: {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</div>
    </div>
  )
}
