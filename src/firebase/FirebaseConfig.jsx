// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSqA32Difhqav1Swpk4O7NRLg2KibrUI",
  authDomain: "myfirstapp-9721d.firebaseapp.com",
  projectId: "myfirstapp-9721d",
  storageBucket: "myfirstapp-9721d.appspot.com",
  messagingSenderId: "356516939116",
  appId: "1:356516939116:web:84c9ef2ba65888fb019f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB, auth}