// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyDSE1qFIKXYkfx7aK90YvrT0vvJYeJ6Uwk",

  authDomain: "stratcom-estate.firebaseapp.com",

  projectId: "stratcom-estate",

  storageBucket: "stratcom-estate.firebasestorage.app",

  messagingSenderId: "606318099680",

  appId: "1:606318099680:web:36446f8838b81f8e392485",

  measurementId: "G-SE3XYDRMJE"

};







const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);