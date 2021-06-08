import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA_f56ikKuSlpi8mAqeVimgz1aT6WRWOP4",
    authDomain: "ig-reels-28384.firebaseapp.com",
    projectId: "ig-reels-28384",
    storageBucket: "ig-reels-28384.appspot.com",
    messagingSenderId: "101765581722",
    appId: "1:101765581722:web:e506e8afb5d586bf7c8823",
    measurementId: "G-GCQTQ5JCWD"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;