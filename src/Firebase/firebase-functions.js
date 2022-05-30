/* import {
    getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider, signOut, collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
  
  } from './firebase-links.js';
 */
import { app, db } from './config.js';

export const auth = getAuth(app);