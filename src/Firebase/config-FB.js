import { initializeApp } from './firebase-links.js';

  const firebaseConfig = {
    apiKey: "AIzaSyDT--aaj5nFYZbV39QMqQ4MUHA9Fz7Ta8M",
    authDomain: "burger-queen-6971c.firebaseapp.com",
    projectId: "burger-queen-6971c",
    storageBucket: "burger-queen-6971c.appspot.com",
    messagingSenderId: "598340725993",
    appId: "1:598340725993:web:1bd56bc9fcb31f475a5478"
  };

  export const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);

