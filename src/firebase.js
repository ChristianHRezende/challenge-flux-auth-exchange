import firebase from 'firebase/app'
 import 'firebase/database' 

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyAFtfQkCz6p5fk8bBMbxqg2kI1tiPkjp-A",
    authDomain: "desafio3xbit.firebaseapp.com",
    databaseURL: "https://desafio3xbit.firebaseio.com",
    projectId: "desafio3xbit",
    storageBucket: "",
    messagingSenderId: "246075104931"
  };
firebase.initializeApp(config);

export const database = firebase.database()