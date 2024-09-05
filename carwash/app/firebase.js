// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhRoWQj7tqY07AJ40UTZz15SMwFe3faOk",
  authDomain: "carwash-af509.firebaseapp.com",
  projectId: "carwash-af509",
  storageBucket: "carwash-af509.appspot.com",
  messagingSenderId: "851820427614",
  appId: "1:851820427614:web:780d751cc7b2769919b7cf",
  measurementId: "G-FB7K59S0KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);