// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdoEUyhu7Qn-qUzk9w85VHslunNAQ7cCo",
  authDomain: "cinequeryapp.firebaseapp.com",
  projectId: "cinequeryapp",
  storageBucket: "cinequeryapp.firebasestorage.app",
  messagingSenderId: "112597899362",
  appId: "1:112597899362:web:22a6f3783a29fd9fec593b",
  measurementId: "G-WXBNTFFZTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()