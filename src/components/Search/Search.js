import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const searchResults = document.documentElement.innerHTML.match(
      new RegExp(searchQuery, "gi")
    );
    console.log(searchResults);
  }
  

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <button className="six-none" type="submit">Search</button>
      <button className="six-show" type="submit">
        <img src="https://github.com/AydinKaseyinoff/CoffeeShopFigma/blob/main/поиск.png?raw=true" alt="seacrh" />
      </button>
    </form>
  );
}