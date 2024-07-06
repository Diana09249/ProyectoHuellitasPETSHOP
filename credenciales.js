// credenciales.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqIzFeF3Js2NIuTb6loc-MfibyYWuQPuQ",
  authDomain: "proyectohuellitasapp.firebaseapp.com",
  projectId: "proyectohuellitasapp",
  storageBucket: "proyectohuellitasapp.appspot.com",
  messagingSenderId: "198868700566",
  appId: "1:198868700566:web:c0a818a5a10c4cc75c21b7",
  measurementId: "G-P8VY6P0B0G"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);  // Agregar esta línea

export { auth, db, storage };  // Exportar también `storage`
