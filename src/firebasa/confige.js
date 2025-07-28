import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkyyblYZM7rP-Il2TifvrEWbEd7zqG8zw",
  authDomain: "axrorbek-8e2f4.firebaseapp.com",
  projectId: "axrorbek-8e2f4",
  storageBucket: "axrorbek-8e2f4.firebasestorage.app",
  messagingSenderId: "390687279793",
  appId: "1:390687279793:web:620c3ee06a426661f03090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let auth = getAuth()