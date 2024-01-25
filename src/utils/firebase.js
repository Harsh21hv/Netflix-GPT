// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4GozNvo-FA9pczQuDvYKTdKx7Rxg1IoM",
  authDomain: "netflixgpt-20134.firebaseapp.com",
  projectId: "netflixgpt-20134",
  storageBucket: "netflixgpt-20134.appspot.com",
  messagingSenderId: "84002048582",
  appId: "1:84002048582:web:ca1e48de17c58467209847",
  measurementId: "G-5BP5WYQD1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();