import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import Footer from "../Footer/Footer";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>{category.name}</NavLink>
    </li>
  ));

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="CategoryList">
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide categories" : "Show categories"}
      </button>
      {isVisible && (
        <>
          <h3>Categories</h3>
          <ul>{output}</ul>
          <AddCategory />
          <DeleteCategory category={categories} />
          <Footer />
        </>
      )}
    </div>
  );
}
