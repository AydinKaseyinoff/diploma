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
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
