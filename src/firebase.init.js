// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbMvajLlg7C02Y324joAQqHjjqr7PLBso",
    authDomain: "ashley-gray-law.firebaseapp.com",
    projectId: "ashley-gray-law",
    storageBucket: "ashley-gray-law.appspot.com",
    messagingSenderId: "162033375416",
    appId: "1:162033375416:web:f6f4acd005d9a920d0fc4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;