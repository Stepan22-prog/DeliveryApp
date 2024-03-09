export default function Product({title, img, price, setToCart}) {
  return (
    <div className="product">
        <div className="product__img">
            <img src={img} alt={title} />
        </div>
        <h2 className="product__title">{title}</h2>
        <div className="product__row">
            <h3 className="product__price">{price}</h3>
            <button onClick={() => setToCart()} className="product__btn">Add to Cart</button>
        </div>
    </div>
  )
}
