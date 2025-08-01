import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqNp7lMzwyy_QDbmNPfxtLVYnyom1QmYc",
  authDomain: "redux-project-b04b4.firebaseapp.com",
  projectId: "redux-project-b04b4",
  storageBucket: "redux-project-b04b4.firebasestorage.app",
  messagingSenderId: "799293528745",
  appId: "1:799293528745:web:cd2cd6900edfdabd6627b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let auth = getAuth(app)