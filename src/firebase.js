// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU3FeHntLyDkr_WLBlQxKnkyUYaud2t-w",
  authDomain: "cityhospital-135d6.firebaseapp.com",
  projectId: "cityhospital-135d6",
  storageBucket: "cityhospital-135d6.appspot.com",
  messagingSenderId: "243618980413",
  appId: "1:243618980413:web:0364ac27a568d0ff1c4054",
  measurementId: "G-DMB03E3T9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);