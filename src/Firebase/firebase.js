// firebase.js
import { initializeApp } from "firebase/ap";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.PARCEL_API_KEY,
  authDomain: process.env.PARCEL_AUTH_DOMAIN,
  projectId: process.env.PARCEL_PROJECT_ID,
  storageBucket: process.env.PARCEL_STORAGE_BUCKET,
  messagingSenderId: process.env.PARCEL_MESSAGING_SENDER_ID,
  appId: process.env.PARCEL_APP_ID,
  measurementId: process.env.PARCEL_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };
