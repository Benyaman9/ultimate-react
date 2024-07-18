// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW0xqc3x7K1pRehWtMJyXNUysqcGMecnI",
    authDomain: "ultimate-react-b5637.firebaseapp.com",
    projectId: "ultimate-react-b5637",
    storageBucket: "ultimate-react-b5637.appspot.com",
    messagingSenderId: "1066596500643",
    appId: "1:1066596500643:web:2d98b67caa60108f172b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);