
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOPiDOWi73-Bu6xoQKVCSmLyE9KygqkQQ",
  authDomain: "examnotesai-e8f9c.firebaseapp.com",
  projectId: "examnotesai-e8f9c",
  storageBucket: "examnotesai-e8f9c.firebasestorage.app",
  messagingSenderId: "289865391352",
  appId: "1:289865391352:web:c7ec20f7d0d9cc41a66f0d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}