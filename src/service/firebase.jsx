import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE6i6R0EWLF0EC4PlabgY2AwKHvrdDDOo",
  authDomain: "lygmotos.firebaseapp.com",
  projectId: "lygmotos",
  storageBucket: "lygmotos.firebasestorage.app",
  messagingSenderId: "780215049073",
  appId: "1:780215049073:web:d59f581ea48898844d34d0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);