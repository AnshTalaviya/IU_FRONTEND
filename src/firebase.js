// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyCAh_jN-v0BwZFN1fHhIjc8EOhrqJktnM0",
  authDomain: "iuauthantication.firebaseapp.com",
  projectId: "iuauthantication",
 appId: "1:977451782685:web:bd3b8ddaa1b9fce3ddacf4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
