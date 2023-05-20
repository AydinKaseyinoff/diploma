import { useContext } from "react";
import { AppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const DeleteCategory = ({ category }) => {
  const { user, products } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  const onDeleteClick = async () => {
    const categoryProducts = Object.values(products).filter(product => product.category === category.id);

    if (categoryProducts.length > 0) {
      alert("This category has existing products. Please delete them before deleting a category.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(doc(db, "categories", category.id));
    } catch (error) {
      console.log("Failed to delete category:", error);
    }
  };

  return (
    <button className="DeleteCategory" onClick={onDeleteClick}>
      -
    </button>
  );
};

export default DeleteCategory;
