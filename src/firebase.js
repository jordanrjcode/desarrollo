import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllB-4HC0zJTpHKAvKqmFGuMuJJVIm1tQ",
  authDomain: "desarrollo-beff7.firebaseapp.com",
  databaseURL: "https://desarrollo-beff7.firebaseio.com",
  projectId: "desarrollo-beff7",
  storageBucket: "desarrollo-beff7.appspot.com",
  messagingSenderId: "907357127574",
  appId: "1:907357127574:web:98a7f18917f08b5b4393b7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
