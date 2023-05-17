import { useEffect, useContext, useState, useRef, useMemo } from "react";
import { AppContext } from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";

export default function Search() {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (searchTerm.trim() === "") {
      return [];
    }
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [products, searchTerm]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Search" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for a game"
        value={searchTerm}
        onChange={handleSearch}
        className="searcher"
      />
      {searchTerm && filteredProducts.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      <div className="SearchResults">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>
    </div>
  );
}
