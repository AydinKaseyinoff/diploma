import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProducts/AddProducts";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((products) => products.category === category.id)
    .map((products) => (
      <div key={products.id} className="BoxList">
        <img loading="eager" src={products.picture} alt={products.name} />
        <NavLink to={"/products/" + products.slug}>
          {products.name}
        </NavLink>
        <div>
          <span>{products.price} ₽</span>
          <AddToCart product={products} />
          <DeleteProduct product={products} />
        </div>
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
