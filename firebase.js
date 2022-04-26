// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABwKSneMngduNiGRt4SSowV3EhHA1-PE",
  authDomain: "fir-auth-9e515.firebaseapp.com",
  projectId: "fir-auth-9e515",
  storageBucket: "fir-auth-9e515.appspot.com",
  messagingSenderId: "753765486264",
  appId: "1:753765486264:web:add65148e65510b0506e4d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };