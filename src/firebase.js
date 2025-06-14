// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCw21Z4DR_iaIJFHOKFjwAfTJHXBbOW6Vw",
  authDomain: "iusignin.firebaseapp.com",
  projectId: "iusignin",
  storageBucket: "iusignin.firebasestorage.app",
  messagingSenderId: "748245927232",
  appId: "1:748245927232:web:c6199d723a3a678ffee6a5",
  measurementId: "G-VCKV9CHJJ6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
