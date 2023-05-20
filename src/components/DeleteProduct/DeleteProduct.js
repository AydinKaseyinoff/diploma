import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { db, storage } from "../../firebase";

export default function Product({ product }) {
  const { user } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  const handleDeleteClick = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmed) {
        return;
      }

      const pictureRef = ref(storage, product.picture);
      await deleteObject(pictureRef);
      await deleteDoc(doc(db, "products", product.id));
    } catch (error) {
      console.log("Failed to delete product:", error);
    }
  };

  return (
    <div className="Product">
      {/* Render product details */}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
