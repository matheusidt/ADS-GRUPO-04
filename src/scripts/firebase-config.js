import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCUsCtM1ntb10K_HoduIx-ra8bYi2mCZ0",
  authDomain: "ajudaceunsp.firebaseapp.com",
  projectId: "ajudaceunsp",
  storageBucket: "ajudaceunsp.appspot.com",
  messagingSenderId: "323748498271",
  appId: "1:323748498271:web:4e024e28b8d6d2fb6184ea",
  measurementId: "G-WZR4S787K3",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
