import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZwZhB8f67FErWT_irsFhuUigwoHpqxxw",
    authDomain: "tinder-firebase-safeya.firebaseapp.com",
    projectId: "tinder-firebase-safeya",
    storageBucket: "tinder-firebase-safeya.appspot.com",
    messagingSenderId: "878966968532",
    appId: "1:878966968532:web:a8e15755b3a41821adeb41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;