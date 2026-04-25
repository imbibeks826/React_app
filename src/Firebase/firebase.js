// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxyIloILdU8uOFD81RHQ3jPLv3HdU3cLo",
  authDomain: "bibekananda-sahoo.firebaseapp.com",
  projectId: "bibekananda-sahoo",
  storageBucket: "bibekananda-sahoo.firebasestorage.app",
  messagingSenderId: "1027415591191",
  appId: "1:1027415591191:web:660a0a623af23d02998f52",
  measurementId: "G-26T250TBK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };
