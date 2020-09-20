import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4OsaAhnwVsrubX4Rlcc1i73UAQMHx--E",
  authDomain: "todo-app-react-2d8e8.firebaseapp.com",
  databaseURL: "https://todo-app-react-2d8e8.firebaseio.com",
  projectId: "todo-app-react-2d8e8",
  storageBucket: "todo-app-react-2d8e8.appspot.com",
  messagingSenderId: "355170135958",
  appId: "1:355170135958:web:f9cf1e3de1fe8d456937b7",
  measurementId: "G-416JD1MHF9",
});

const db = firebaseApp.firestore();

export default db;
