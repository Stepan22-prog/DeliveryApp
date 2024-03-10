import { useEffect, useState } from "react";
import Product from "./Product";
import ProductService from "../../service/productsService";
import './main.css';

const productService = new ProductService();

export default function Main({ setToCart }) {
  const [products, setProducts] = useState([]);

	async function getProducts() {
		const results =  await productService.getProducts();
		setProducts(results);
	}

	useEffect(() => {
		getProducts();
	}, []);

  return (
	<div className="product-list">
		{products.length > 0 && products.map((product) => {
		return (<Product 
			key={product.id} 
			id={product.id}
			title={product.title} 
			img={product.photo}
			price={product.price}
			setToCart={setToCart}
		/>)
	})}
	</div>
	)
}
