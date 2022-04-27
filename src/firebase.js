// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDhLviPd0VQfu3vCcgkgsDQgy3XfqBR88",
    authDomain: "tunnel-viewer.firebaseapp.com",
    databaseURL: "https://tunnel-viewer-default-rtdb.firebaseio.com",
    projectId: "tunnel-viewer",
    storageBucket: "tunnel-viewer.appspot.com",
    messagingSenderId: "337136604577",
    appId: "1:337136604577:web:9da5f0e40f5a44245c67e0",
    measurementId: "G-R5KHPG47FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export { db, auth }