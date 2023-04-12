// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF5kltLeSDIbnLrfqkAHZeGcAjZl8mhVQ",
  authDomain: "diplom-a8f6a.firebaseapp.com",
  projectId: "diplom-a8f6a",
  storageBucket: "diplom-a8f6a.appspot.com",
  messagingSenderId: "604460885243",
  appId: "1:604460885243:web:aece7d2e1cfeff94b9fc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categories = collection(db, "categories");