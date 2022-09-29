// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,} from "firebase/auth";
import {getFirestore, collection, addDoc, query, where, getDocs} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd9AbA4x1r_WMAnzM8NLJq2BudpZHfY3w",
  authDomain: "facebook-bdf82.firebaseapp.com",
  projectId: "facebook-bdf82",
  storageBucket: "facebook-bdf82.appspot.com",
  messagingSenderId: "617318988102",
  appId: "1:617318988102:web:9c81b540a98ef3534a0d47"
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
     });
  } catch (err) {
     console.error(err);
    alert(err.message);
   }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true
  } catch (err) {
     console.error(err);
    alert(err.message);
    return false
  }
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
};

