// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW_e2guZ9LsVVQ0PrADM-74LGfFQwvBLI",
  authDomain: "iizkemicapital.firebaseapp.com",
  projectId: "iizkemicapital",
  storageBucket: "iizkemicapital.firebasestorage.app",
  messagingSenderId: "353101819529",
  appId: "1:353101819529:web:3e1d0c9367261c1f75a058",
  measurementId: "G-X9CF5SQQVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Firestore database
export const db = getFirestore(app);
