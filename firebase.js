// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdDRhjG0ueUWyF8m0rMXVorFY_cz-bhzY",
  authDomain: "mobile-passport-for-success.firebaseapp.com",
  projectId: "mobile-passport-for-success",
  storageBucket: "mobile-passport-for-success.appspot.com",
  messagingSenderId: "999142558151",
  appId: "1:999142558151:web:30fd83b8e33e8bad09b1e2",
  measurementId: "G-4XWJW9YV9Q"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
