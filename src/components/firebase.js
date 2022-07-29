import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6t4REjRCtKNbqlGYOyYa3Vfb4jhc_kjU",
  authDomain: "disney-plus-e1f60.firebaseapp.com",
  projectId: "disney-plus-e1f60",
  storageBucket: "disney-plus-e1f60.appspot.com",
  messagingSenderId: "372343511349",
  appId: "1:372343511349:web:d659f427f5fe9c5b00947c",
  measurementId: "G-RZC8WP3LYQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;