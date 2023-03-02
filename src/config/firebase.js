// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9UJ4rSUhpNhPWKRTkqXVyex4N9QROWEg",
  authDomain: "recipe-riot.firebaseapp.com",
  projectId: "recipe-riot",
  storageBucket: "recipe-riot.appspot.com",
  messagingSenderId: "697531527375",
  appId: "1:697531527375:web:7f34d2d4bddcae88d447ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
