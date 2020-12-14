import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3bM1Y_wWxG48lENIBNMDxF1nK06xsbyc",
    authDomain: "store-mirror.firebaseapp.com",
    databaseURL: "https://store-mirror.firebaseio.com",
    projectId: "store-mirror",
    storageBucket: "store-mirror.appspot.com",
    messagingSenderId: "639059530345",
    appId: "1:639059530345:web:275d60daaf7cdeac1f48f8",
    measurementId: "G-MHS5W1K6XW"
};


  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
