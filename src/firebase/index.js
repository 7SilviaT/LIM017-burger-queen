import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDT--aaj5nFYZbV39QMqQ4MUHA9Fz7Ta8M",
    authDomain: "burger-queen-6971c.firebaseapp.com",
    projectId: "burger-queen-6971c",
    storageBucket: "burger-queen-6971c.appspot.com",
    messagingSenderId: "598340725993",
    appId: "1:598340725993:web:1bd56bc9fcb31f475a5478"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };

