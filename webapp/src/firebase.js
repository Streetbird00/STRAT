// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSE1qFIKXYkfx7aK90YvrT0vvJYeJ6Uwk",
  authDomain: "stratcom-estate.firebaseapp.com",
  projectId: "stratcom-estate",
  storageBucket: "stratcom-estate.firebasestorage.app",
  messagingSenderId: "606318099680",
  appId: "1:606318099680:web:36446f8838b81f8e392485",
  measurementId: "G-SE3XYDRMJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);