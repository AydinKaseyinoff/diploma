import React, { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProducts/AddProducts";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="BoxList">
        <img className="ProductImage" src={product.picture} alt={product.name} />
        <NavLink to={"/products/" + product.slug}>
          {product.name}
        </NavLink>
        <div>
          <span>{product.price} ₽</span>
          <AddToCart product={product} />
          <DeleteProduct product={product} />
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
