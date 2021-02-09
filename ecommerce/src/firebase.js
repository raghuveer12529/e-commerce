// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAn-yjP8SIkCfLq5YmwHP6rKjdOWW3omtY",
    authDomain: "store-a434b.firebaseapp.com",
    projectId: "store-a434b",
    storageBucket: "store-a434b.appspot.com",
    messagingSenderId: "270972381972",
    appId: "1:270972381972:web:ff54b6bae9f4961c6ab001",
    measurementId: "G-9W9ZQTW0T1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth =  firebase.auth();

  export {db,auth}