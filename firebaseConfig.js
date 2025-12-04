// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "TU_API_KEY_REAL",
  authDomain: "d-moviles.firebaseapp.com",
  projectId: "d-moviles",
  storageBucket: "d-moviles.appspot.com",
  messagingSenderId: "TU_SENDER_REAL",
  appId: "TU_APP_REAL",

  // ✅ ESTA YA ES LA URL REAL Y CORRECTA
  databaseURL: "https://d-moviles-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
