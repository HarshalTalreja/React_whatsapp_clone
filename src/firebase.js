import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4skP8CZK7H2s8uuaOjhM_ucVucznaF0I",
    authDomain: "whatsapp-clone-b1cb1.firebaseapp.com",
    projectId: "whatsapp-clone-b1cb1",
    storageBucket: "whatsapp-clone-b1cb1.appspot.com",
    messagingSenderId: "784879898569",
    appId: "1:784879898569:web:2c1ef9b904182390956218",
    measurementId: "G-T054LCYRW2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;