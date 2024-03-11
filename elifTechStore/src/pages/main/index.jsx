import { useEffect, useState } from "react";
import Product from "./Product";
import ProductService from "../../service/productsService";
import './main.css';

const productService = new ProductService();

export default function Main({ cart, setToCart }) {
  const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [shop, setShop] = useState(0);

	async function getProducts(shop) {
		const results =  await productService.getProducts(shop);
		setProducts(results);
	}

	useEffect(() => {
		getProducts(shop);
	}, [shop]);

	useEffect(() => {
		const dataInStorage = localStorage.getItem('favorites');
    if (dataInStorage && dataInStorage.length > 0) {
      setFavorites(JSON.parse(dataInStorage));
    }
	}, []);


	useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
		setProducts(prevState => prevState.map(productItem))
  }, [favorites]);

  return (
	<main className="main">
		<div className="shops-list">
			<button className="shop-item button" onClick={() => setShop(0)}>All</button>
			<button className="shop-item button" onClick={() => setShop(1)}>Drugs 24</button>
			<button className="shop-item button" onClick={() => setShop(2)}>Pharmacy</button>
		</div>
		<div className="product-list">
			{products.length > 0 && products.map((product) => {
				return (<Product 
					key={product.id} 
					id={product.id}
					title={product.title} 
					img={product.photo}
					price={product.price}
					cart={cart}
					setToCart={setToCart}
					favorites={favorites}
					setFavorites={setFavorites}
				/>)
			})}
		</div>
	</main>
	)
}
