// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rPDTb2Rwf_z8fHBCWyQotoJ9xKEwYq0",
  authDomain: "kiosk-9d6b2.firebaseapp.com",
  databaseURL: "https://kiosk-9d6b2-default-rtdb.firebaseio.com",
  projectId: "kiosk-9d6b2",
  storageBucket: "kiosk-9d6b2.appspot.com",
  messagingSenderId: "287872415840",
  appId: "1:287872415840:web:20b534ad66b681c68eab05",
  measurementId: "G-68LHM4VV7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);