import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchRegex = new RegExp(searchTerm, "gi");
    const matches = document.documentElement.innerHTML.match(searchRegex);
    if (matches) {
      const firstMatch = matches[0];
      const matchIndex = document.documentElement.innerHTML.indexOf(firstMatch);
      window.scrollTo(0, matchIndex);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search on this page..." />
    </div>
  );
}
