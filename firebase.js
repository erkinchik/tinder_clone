// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5MJWpkoWF1BVoSAqs4P_ZHBphLxoQzs",
  authDomain: "tinderclone-969d6.firebaseapp.com",
  projectId: "tinderclone-969d6",
  storageBucket: "tinderclone-969d6.appspot.com",
  messagingSenderId: "73611802577",
  appId: "1:73611802577:web:0a04f325c32a81ee40d2f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { db, auth };
