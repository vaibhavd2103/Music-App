import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ5t6pc4JvlCI_hL0RIQCxP0am60lU1wQ",
  authDomain: "music-app-a86f9.firebaseapp.com",
  databaseURL: "https://music-app-a86f9-default-rtdb.firebaseio.com",
  projectId: "music-app-a86f9",
  storageBucket: "music-app-a86f9.appspot.com",
  messagingSenderId: "808951659959",
  appId: "1:808951659959:web:5a913d6e06d3f1ed9fbc32",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
