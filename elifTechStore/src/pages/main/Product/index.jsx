import './product.css';

export default function Product({id, title, img, price, setToCart}) {
  return (
    <div className="product">
        <div className="product__img">
            <img src={img} alt={title} />
        </div>
        <h2 className="product__title">{title}</h2>
        <div className="product__row">
            <h3 className="product__price">{price} грн</h3>
            <button onClick={() => setToCart(prevState => [...prevState, {id, title, photo: img, price, count: 1}])} className="product__btn button">Add to Cart</button>
        </div>
    </div>
  )
}
