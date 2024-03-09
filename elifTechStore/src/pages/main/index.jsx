import { useEffect, useState } from "react";
import Product from "./Product";
import ProductService from "../../service/productsService";

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

  return products.length > 0 && products.map((product) => {
		return (<Product 
			key={product.id} 
			title={product.title} 
			img={product.photo}
			price={product.price}
			setToCart={() => setToCart(product.id)}
		/>)
	})
}
