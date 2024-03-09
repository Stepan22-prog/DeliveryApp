import { useState } from "react";
import Product from "./Product";

export default function Main({ setToCart }) {
  const [products, setProducts] = useState([]);
  return products.map((product) => {
		<Product 
			key={product.id} 
			title={product.title} 
			img={product.img}
			price={product.price}
			setToCart={() => setToCart(product.id)}
		/>
	})
}
