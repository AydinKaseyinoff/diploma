import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./CategoryList.css";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <div className="category-links">
      <li key={category.id}>
        <NavLink to={`/categories/${category.slug}`}>
          <img src={category.icon} alt={category.name} />
          {category.name}
        </NavLink>
        <DeleteCategory category={category} />
      </li>
    </div>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
      <AddCategory />
      <div className="YouTube">
        <a href="https://youtu.be/UKrA8hv8dvE">
          <img
            src="https://cdn.icon-icons.com/icons2/836/PNG/512/Youtube_icon-icons.com_66802.png"
            alt="youtube"
          />
        </a>
      </div>
    </div>
  );
}
