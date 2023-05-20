// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI5UldN_Qs1udMT7Ixpbwf1beu2m4ESwc",
  authDomain: "pnk-website-58ab3.firebaseapp.com",
  projectId: "pnk-website-58ab3",
  storageBucket: "pnk-website-58ab3.appspot.com",
  messagingSenderId: "682356204746",
  appId: "1:682356204746:web:78e8510150315dc7a8c033",
  measurementId: "G-HR63N5K0KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);