import { useEffect, useState, useCallback } from "react";
import Product from "./Product";
import ProductService from "../../service/productsService";
import './main.css';
import loadingSvg from '../../assets/loading.svg';

const productService = new ProductService();

export default function Main({ cart, setToCart }) {
  const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [shop, setShop] = useState(0);

	const checkFavorite = useCallback(
		(id, favorites) => favorites.includes(id), 
	[]);

	const checkProductInCart = useCallback((id, cart) => {
		return cart.some((cartItem) => cartItem.id === id);
	}, []);
	
	function sortProducts(products, type = "price-ascending") {
		function sortFavorites(a, b) {
			if (checkFavorite(a.id, favorites) < checkFavorite(b.id, favorites)) return 1;
    	if (checkFavorite(a.id, favorites) > checkFavorite(b.id, favorites)) return -1;
			return 0
		}
		switch (type) {
			case "price-ascending":
				return products.sort((a, b) => sortFavorites(a, b) || a.price - b.price);
			case "price-descending":
				return products.sort((a, b) => sortFavorites(a, b) || b.price - a.price);
			case "date-ascending":
				return products.sort((a, b) => sortFavorites(a, b) || new Date(a.date) - new Date(b.date));
			case "date-descending":
				return products.sort((a, b) => sortFavorites(a, b) || new Date(b.date) - new Date(a.date));
			default:
				break;
		}
	}
	
	async function getProducts(shop) {
		const results =  await productService.getProducts(shop);
		setProducts(sortProducts(results));
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
  }, [favorites]);

  return (
	<div className="main">
		<div className="shops-list">
			<h2 className="shops__title">Shops:</h2>
			<button className="shop-item button" onClick={() => setShop(0)}>All</button>
			<button className="shop-item button" onClick={() => setShop(1)}>Drugs 24</button>
			<button className="shop-item button" onClick={() => setShop(2)}>Pharmacy</button>
		</div>
		<div className="product-body">
			<div className="sorting">
				<h3 className="sorting__title">Sort by:</h3>
				<select className="sorting__select" onChange={(event) => {
				const sortedProducts = sortProducts(products, event.target.value);
				setProducts([...sortedProducts]);
			}}>
				<option value="price-ascending">Price ascending</option>
				<option value="price-descending">Price descending</option>
				<option value="date-ascending">Date ascending</option>
				<option value="date-descending">Date descending</option>
			</select>
			</div>
			<div className="product-list">
				{products.length === 0 && 
				<div className="loading">
					<div className="loading__icon"><img src={loadingSvg} alt="loading img" /></div>
					<h2 className="loading__text">Loading...</h2>
				</div>}
				{products.length > 0 && products.map((product) => {
					return (<Product
						key={product.id}
						id={product.id}
						title={product.title}
						img={product.photo}
						price={product.price}
						date={new Date(product.date)}
						inCart={checkProductInCart(product.id, cart)}
						setToCart={setToCart}
						favorite={checkFavorite(product.id, favorites)}
						setFavorites={setFavorites}
					/>)
				})}
			</div>
		</div>
	</div>
	)
}
