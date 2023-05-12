import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // Do something with searchQuery
    console.log(searchQuery);
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
