// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIfc2XLBbtPESnNJabUuFI91FIEzqGx0s",
  authDomain: "cityhospital-e30c8.firebaseapp.com",
  projectId: "cityhospital-e30c8",
  storageBucket: "cityhospital-e30c8.appspot.com",
  messagingSenderId: "369275558290",
  appId: "1:369275558290:web:4095c3d5596ff7ac13894b",
  measurementId: "G-3R4D2WW02T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);