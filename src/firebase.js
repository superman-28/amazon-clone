// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpYb38ewtdaR_Z6SDFGNaYtTwo5c0_c-k",
  authDomain: "project-d6bad.firebaseapp.com",
  projectId: "project-d6bad",
  storageBucket: "project-d6bad.appspot.com",
  messagingSenderId: "771053668386",
  appId: "1:771053668386:web:11c3f618f3ec90162c227b",
  measurementId: "G-P3E7RBQ7M4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
