import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDBKXMb6TaUMlYcZNLu8SZ4S-N9FVZaUpA",
  authDomain: "spawnpoint-a5fe4.firebaseapp.com",
  projectId: "spawnpoint-a5fe4",
  storageBucket: "spawnpoint-a5fe4.firebasestorage.app",
  messagingSenderId: "929399361204",
  appId: "1:929399361204:web:5c17f13653657a9bac91e1"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);