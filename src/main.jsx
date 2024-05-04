import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_p6CCNcdL_FwF2ZxZRrnIrAOYeNUXlfs",
  authDomain: "zoku-reactjs.firebaseapp.com",
  projectId: "zoku-reactjs",
  storageBucket: "zoku-reactjs.appspot.com",
  messagingSenderId: "875056095593",
  appId: "1:875056095593:web:76519af684584c55ed1df8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
