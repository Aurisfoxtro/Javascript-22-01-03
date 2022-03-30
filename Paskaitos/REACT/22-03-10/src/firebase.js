import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth'); // problemos sprendimas?

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";  //ar reikalingas???
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVFpEcI6DZ9MVbDlHVGFscxiUWH7SJMA",
  authDomain: "expenses-c29c7.firebaseapp.com",
  projectId: "expenses-c29c7",
  storageBucket: "expenses-c29c7.appspot.com",
  messagingSenderId: "336643591151",
  appId: "1:336643591151:web:122501d1af2b9bda66041a"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export default firebase