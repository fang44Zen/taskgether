import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVlP8_hw7OC6_OVKUqW59wJvjntCvJ8uE",
    authDomain: "taskgether.firebaseapp.com",
    projectId: "taskgether",
    storageBucket: "taskgether.appspot.com",
    messagingSenderId: "73177725077",
    appId: "1:73177725077:web:617722cb5edab7311e439c"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);