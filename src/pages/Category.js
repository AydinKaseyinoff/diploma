
import { useState } from "react";
import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category(props) {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Phone Cases", slug: "phone-cases" },
    { id: 2, name: "Chargers and Cables", slug: "chargers-and-cables" },
    { id: 3, name: "Portable Power Banks", slug: "portable-power-banks" },
    { id: 4, name: "Audio and Video Accessories", slug: "audio-and-video-accessories" },
  ];
  const category = categories.find((category) => category.slug === params.slug);

  // Используем состояние, чтобы хранить выбранную категорию
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  if (!category) {
    return <NotFound />;
  }
  return (
    <div className="Category">
      <h1 style={{ color: selectedCategory === category.name ? "red" : "black" }}>
        {category.name}
      </h1>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {/* Используем обработчик события onClick, чтобы изменить состояние */}
              <a
                href="#"
                onClick={() => handleCategorySelect(category.name)}
                style={{ color: selectedCategory === category.name ? "red" : "black" }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
