import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCiEB7YAS7Fi7i6KLlLxC6tLMipwVe9RDU",
  authDomain: "shop-732d9.firebaseapp.com",
  projectId: "shop-732d9",
  storageBucket: "shop-732d9.appspot.com",
  messagingSenderId: "746218685406",
  appId: "1:746218685406:web:81d46f9c031930ab22134f",
  measurementId: "G-B3S4QNFCCM",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

