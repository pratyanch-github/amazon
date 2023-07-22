// Import the functions you need from the SDKs you need
import Firebase from "firebase";
// import "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPphh_9ImaWoMYY_uvaqn9gw7ZrTdXtXY",
  authDomain: "clone-26d2c.firebaseapp.com",
  projectId: "clone-26d2c",
  storageBucket: "clone-26d2c.appspot.com",
  messagingSenderId: "538787750742",
  appId: "1:538787750742:web:971c3c9f914d052de9acf7",
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);

// export const db = fireapp.firestore();
const auth = Firebase.auth();
export { auth };

// export default { db, auth };

// sirf {auth} ko import krke .. humlog ussi auth ko  by default code mei ... const auth = getAuth() mei {auth} const aut = getAuth(auth) daal ke kaam kro
