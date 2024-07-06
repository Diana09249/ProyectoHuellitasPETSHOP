import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqIzFeF3Js2NIuTb6loc-MfibyYWuQPuQ",
  authDomain: "proyectohuellitasapp.firebaseapp.com",
  projectId: "proyectohuellitasapp",
  storageBucket: "proyectohuellitasapp.appspot.com",
  messagingSenderId: "198868700566",
  appId: "1:198868700566:web:c0a818a5a10c4cc75c21b7",
  measurementId: "G-P8VY6P0B0G"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firebase Analytics
const analytics = getAnalytics(appFirebase);

// Initialize Firestore
const db = getFirestore(appFirebase);

export default appFirebase;
export { auth, db };
