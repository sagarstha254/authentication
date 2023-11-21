// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-SX7ihnbKVnOGrka07FA1uWbvVXaXfgg",
  authDomain: "oauth20-909c6.firebaseapp.com",
  projectId: "oauth20-909c6",
  storageBucket: "oauth20-909c6.appspot.com",
  messagingSenderId: "509036690582",
  appId: "1:509036690582:web:bd2f2a4565b2654dff56b7",
  measurementId: "G-K6VK89QWRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);