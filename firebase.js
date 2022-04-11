// Import the functions you need from the SDKs you need
import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "@firebase/firestore";
import templateData from "./tempData";
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
  measurementId: "G-4XWJW9YV9Q",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// This class is a set of calls to get data from the fire database
class Fire extends React.Component {
  // Interface of the unsubscribe function
  unsubscribe() {}

  // Gets the current lists in the database according to the current user
  getLists(callback) {
    // When the state of authentication changes (EX: logging out) it wont try to pull data
    // from the fire database
    let authUnsub = this.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // Sets up a function that would stop the listener that checks the database for changes
        // but also pushes the data from the database into an array and returns it to where it was called
        this.unsubscribe = this.refLists
          .orderBy("name")
          .onSnapshot((snapshot) => {
            const lists = [];

            snapshot.forEach((doc) => {
              lists.push({ id: doc.id, ...doc.data() });
            });

            // unsubscribe from the onAuthStateChanged listener
            authUnsub();
            callback(lists);
          });
      }
    });
  }

  get userID() {
    return this.auth.currentUser.uid;
  }

  get refLists() {
    return firebase
      .firestore()
      .collection("users")
      .doc(this.userID)
      .collection("lists");
  }

  get refUser() {
    return firebase.firestore().collection("users").doc(this.userID);
  }

  // Method that initializes a user with information and data
  addUser(uid, email) {
    let users = firebase.firestore().collection("users");

    // initializes document fields in the user database
    users.doc(uid).set({
      userEmail: email,
      userPoints: 0,
    });

    // Takes the data from tempData.js and adds it into the database
    for (let index = 0; index < templateData.length; index++) {
      users.doc(uid).collection("lists").add(templateData[index]);
    }
  }

  addLists(lists) {
    let ref = this.refLists;

    ref.add(lists);
  }

  updateList(list) {
    let ref = this.refLists;

    ref.doc(list.id).update(list);
  }

  updatePoints(points) {
    let ref = this.refUser;

    ref.update(points);
  }

  get auth() {
    return firebase.auth();
  }

  // Calls the method to stop the database listener
  detach() {
    this.unsubscribe();
  }
}

const auth = firebase.auth();

export { Fire, auth };
