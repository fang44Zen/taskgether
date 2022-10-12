import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

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

  export const creatUserDocumentFromAuth = async (userAuth, additionnalInformation={} ) =>{
    if(!userAuth) return;
    const userdocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userdocRef);

    if(!userSnapShot.exists()){
      const {displayName, photoURL, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userdocRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          ...additionnalInformation,
        });
      }catch(error){
        console.log('error: ', error.message);
      }
    }
    return userdocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }