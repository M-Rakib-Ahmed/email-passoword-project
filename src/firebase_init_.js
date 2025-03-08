// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMW-SX6Ox2nP2cwZjqAg0h4UtFypOJcbg",
    authDomain: "email-password-auth-19882.firebaseapp.com",
    projectId: "email-password-auth-19882",
    storageBucket: "email-password-auth-19882.firebasestorage.app",
    messagingSenderId: "434378283321",
    appId: "1:434378283321:web:6694d87cd218b5c795b0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;