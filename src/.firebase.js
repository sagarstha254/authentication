import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBanfwuyqzYnFDPruKzqs2JiI2z-vJ2aQ0",
  authDomain: "oauth30-cb89f.firebaseapp.com",
  projectId: "oauth30-cb89f",
  storageBucket: "oauth30-cb89f.appspot.com",
  messagingSenderId: "965180373030",
  appId: "1:965180373030:web:68aae3831c4cb05eb88ee7",
  measurementId: "G-3DF890DY8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
