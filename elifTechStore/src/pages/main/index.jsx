import { useEffect, useState } from "react";
import Product from "./Product";
import ProductService from "../../service/productsService";

const productService = new ProductService();

export default function Main({ setToCart }) {
  const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productService.getProducts());
	}, []);

  return products.length > 0 && products.map((product) => {
		<Product 
			key={product.id} 
			title={product.title} 
			img={product.img}
			price={product.price}
			setToCart={() => setToCart(product.id)}
		/>
	})
}
