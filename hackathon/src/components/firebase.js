// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx1OdiI6L8e7ZNz6NKuOvTrtE5sTgj9j4",
  authDomain: "eldernest-2ed7b.firebaseapp.com",
  projectId: "eldernest-2ed7b",
  storageBucket: "eldernest-2ed7b.firebasestorage.app",
  messagingSenderId: "103187847942",
  appId: "1:103187847942:web:fbdd80af14725363bf9c87",
  measurementId: "G-X5E7KWGHM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);
// Initialize Firestore

export const postsCollection = collection(db, "posts");
export const storiesCollection = collection(db, "stories");

export { db, collection, addDoc, getDocs };

