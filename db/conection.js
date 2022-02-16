// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZEYtGnR5IA9Vz1tY9DsorI5XSVcf9TuU",
    authDomain: "soho-challenge.firebaseapp.com",
    projectId: "soho-challenge",
    storageBucket: "soho-challenge.appspot.com",
    messagingSenderId: "269236462558",
    appId: "1:269236462558:web:0235cfad9a33eaa125b34f"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);


module.exports = db;