// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF5kltLeSDIbnLrfqkAHZeGcAjZl8mhVQ",
  authDomain: "diplom-a8f6a.firebaseapp.com",
  projectId: "diplom-a8f6a",
  storageBucket: "diplom-a8f6a.appspot.com",
  messagingSenderId: "604460885243",
  appId: "1:604460885243:web:aece7d2e1cfeff94b9fc5e",
};
// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
export const db = getFirestore(app);
export const storage = getStorage(app);
const auth = getAuth(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
// отправка фотографии и получение ее url
export const uploadProductPhoto = async (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.log("Failed to upload product photo:", error);
    throw error; // Пробросить ошибку для дальнейшей обработки, если необходимо
  }
};
