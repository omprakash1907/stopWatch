// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDWF9fVxCt2_wRB4BqgMZFtD-ihXwFeXc",
  authDomain: "crud-87574.firebaseapp.com",
  projectId: "crud-87574",
  storageBucket: "crud-87574.appspot.com",
  messagingSenderId: "661487276942",
  appId: "1:661487276942:web:e5b414403e8767d0754adf",
  measurementId: "G-LJ42KTQPBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)