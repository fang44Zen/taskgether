import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVlP8_hw7OC6_OVKUqW59wJvjntCvJ8uE",
    authDomain: "taskgether.firebaseapp.com",
    projectId: "taskgether",
    storageBucket: "taskgether.appspot.com",
    messagingSenderId: "73177725077",
    appId: "1:73177725077:web:617722cb5edab7311e439c"
  };
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
