import { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const toggleAsideVisibility = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <button className="Hide-Button" onClick={toggleAsideVisibility}>Toggle Categories</button>
      {isAsideVisible && (
        <aside>
          <CategoryList />
        </aside>
      )}
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
}
