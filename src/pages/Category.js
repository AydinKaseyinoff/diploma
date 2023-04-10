import { useParams } from "react-router";
import NotFound from "./NotFound";

export default function Category(props) {
  const { slug } = useParams();

  const categories = [
    { id: 1, name: "Phone Cases", slug: "phone-cases" },
    { id: 2, name: "Chargers and Cables", slug: "chargers-and-cables" },
    { id: 3, name: "Portable Power Banks", slug: "portable-power-banks" },
    { id: 4, name: "Audio and Video Accessories", slug: "audio-and-video-accessories" },
  ];
  const category = categories.find(
    (category) => category.slug === slug
  );

  if (!category) {
    return <NotFound />
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}
