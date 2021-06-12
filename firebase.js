import firebase from 'firebase';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbFO6uYPbiUcvGbGpiLl4TAkr3emYsBx8",
    authDomain: "facebook-clone-rv.firebaseapp.com",
    projectId: "facebook-clone-rv",
    storageBucket: "facebook-clone-rv.appspot.com",
    messagingSenderId: "193878109788",
    appId: "1:193878109788:web:f52eb4e0ae1cf58fe94099",
    measurementId: "G-WFVCW29EHM"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };