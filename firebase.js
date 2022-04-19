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
  apiKey: "AIzaSyACrOtEHuVC4UAmYEU2iX3c-PtNKHufnfU",
  authDomain: "mobile-passport-4-success.firebaseapp.com",
  projectId: "mobile-passport-4-success",
  storageBucket: "mobile-passport-4-success.appspot.com",
  messagingSenderId: "21497270259",
  appId: "1:21497270259:web:0588ef61fac93d8b394c86",
  measurementId: "G-Q87JLT2GH3",
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
  unsubLists() {}
  unsubUserData() {}

  // Gets the current lists in the database according to the current user
  getLists(callback) {
    // When the state of authentication changes (EX: logging out) it wont try to pull data
    // from the fire database
    let authUnsub = this.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // Sets up a function that would stop the listener that checks the database for changes
        // but also pushes the data from the database into an array and returns it to where it was called
        this.unsubLists = this.refLists
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

  getVitalSigns(callback) {
    // When the state of authentication changes (EX: logging out) it wont try to pull data
    // from the fire database
    let authUnsub = this.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // Sets up a function that would stop the listener that checks the database for changes
        // but also pushes the data from the database into an array and returns it to where it was called
        this.unsubUserData = this.refVitalSigns
          .orderBy("createdAt", "asc")
          .onSnapshot((snapshot) => {
            const userData = [];

            snapshot.forEach((doc) => {
              userData.push({ id: doc.id, ...doc.data() });
            });

            // unsubscribe from the onAuthStateChanged listener
            authUnsub();
            callback(userData);
          });
      }
    });
  }

  get userID() {
    return this.auth.currentUser.uid;
  }

  get refUser() {
    return firebase.firestore().collection("users").doc(this.userID);
  }

  get refLists() {
    return firebase
      .firestore()
      .collection("users")
      .doc(this.userID)
      .collection("lists");
  }

  get refVitalSigns() {
    return firebase
      .firestore()
      .collection("users")
      .doc(this.userID)
      .collection("vitalsigns");
  }

  // Method that initializes a user with information and data
  addUser(uid, email) {
    let users = firebase.firestore().collection("users");

    // initializes document fields in the user database
    users.doc(uid).set({
      roles: ["user"],
      cManagers: [],
      email: email,
      userPoints: 0,
    });

    // Takes the data from tempData.js and adds it into the database
    for (let index = 0; index < templateData.length; index++) {
      users.doc(uid).collection("lists").add(templateData[index]);
    }

    // users.doc(uid).collection("vitalsigns").add({
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  }

  addLists(lists) {
    let ref = this.refLists;

    ref.add(lists);
  }

  addVitalsign(vitals) {
    let ref = this.refVitalSigns;

    ref.add(vitals);
  }

  updateList(list) {
    let ref = this.refLists;
    console.log('FIRE: TEST')
    ref.doc(list.id).update(list);
  }

  updateUser(data) {
    let ref = this.refUser;

    ref.update(data);
  }

  updatePoints(points) {
    let ref = this.refUser;

    ref.update(points);
  }

  get auth() {
    return firebase.auth();
  }

  get timeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  // Calls the method to stop the database listener
  detach() {
    this.unsubLists();
    this.unsubUserData();
  }
}

export { Fire };
