import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxBUYekAcXzBdkTKEs5kDqeKMOSWUM9MA",
  authDomain: "drop-sho.firebaseapp.com",
  projectId: "drop-sho",
  storageBucket: "drop-sho.appspot.com",
  messagingSenderId: "134639917045",
  appId: "1:134639917045:web:23b719a96b9d53efc0b2bc",
  measurementId: "G-PPSHLNZWM9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const providerGoogle = new firebase.auth.GoogleAuthProvider();


export {
    db,
    auth,
    providerGoogle,
    storage,
};