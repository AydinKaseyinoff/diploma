import { useContext } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "./Product.css"
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="Product">
      <div className="ProductOpen">
        <h1>{product.description}</h1>
        <img src={product.picture} alt={product.name} />
      </div>
      <div>
        <span>{product.price}₽</span>
        <AddToCart product={products} />
      </div>
    </div>
  );
}
