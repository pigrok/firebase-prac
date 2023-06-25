// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4Fr1af2fzm0yMnfcb2ampK2vRMcOHSg",
  authDomain: "test-firebase-78e12.firebaseapp.com",
  projectId: "test-firebase-78e12",
  storageBucket: "test-firebase-78e12.appspot.com",
  messagingSenderId: "1089396896201",
  appId: "1:1089396896201:web:aeca964bd43c7f96347818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
