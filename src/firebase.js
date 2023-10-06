import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // for realtime database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9u1RHQ6W3KxSWG93f42OTYiMpHN3rAxI",
    authDomain: "messaging-app-mern-3fd1c.firebaseapp.com",
    projectId: "messaging-app-mern-3fd1c",
    storageBucket: "messaging-app-mern-3fd1c.appspot.com",
    messagingSenderId: "985587852124",
    appId: "1:985587852124:web:9b413348157b9d93d71799",
    measurementId: "G-40VF073TYS"
  };
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth()
const provider = new GoogleAuthProvider();
export default db;
export { auth, provider };

