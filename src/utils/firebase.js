// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD85SREEtIgSZvpiKWXi07B8Wm63eSgU7U",
    authDomain: "netflix-gpt-f6abd.firebaseapp.com",
    projectId: "netflix-gpt-f6abd",
    storageBucket: "netflix-gpt-f6abd.firebasestorage.app",
    messagingSenderId: "194810232331",
    appId: "1:194810232331:web:d44f18ec2e8d67249f110e",
    measurementId: "G-45J4GP95XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = getAuth();