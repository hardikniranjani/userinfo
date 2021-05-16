import firebase from "firebase";

const firebaseconfig = {
    apiKey: "AIzaSyCwN9NbQI6EWwEk9uM1pnvRO2w4IcgxzME",
    authDomain: "userapp0.firebaseapp.com",
    databaseURL: "https://userapp0-default-rtdb.firebaseio.com",
    projectId: "userapp0",
    storageBucket: "userapp0.appspot.com",
    messagingSenderId: "230526678489",
    appId: "1:230526678489:web:8ad53fcc6523684f70d5c8",
    measurementId: "G-V3L4ZCB7CZ"
};


firebase.initializeApp(firebaseconfig);
firebase.analytics();

export default firebase;