import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function AddCategory() {
  const { user } = useContext(AppContext)
  const[category, setCategory] = useState("");

  if (!user || !user.isAdmin) {
    return null
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }
  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {

        alert("Please provuse a category name with minimum length of 5 characters")
    }
    addDoc(categoryCollection, {
        name: name,
        slug: name
           .replace("", "-")
           .toLocaleLowerCase(),
    }).then(() => {
        setCategory("")
    })
  }
  return (
    <div className="AddCategory">
      <input
        type="text"
        placeholder="Category name"
        value={category}
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}
