// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeq9Xawzvu2Lkg75UcZLHiLDBi1rxBIuA",
  authDomain: "sarah-portfolio-4905a.firebaseapp.com",
  projectId: "sarah-portfolio-4905a",
  storageBucket: "sarah-portfolio-4905a.appspot.com",
  messagingSenderId: "293703368278",
  appId: "1:293703368278:web:49fba0f81cfa85b50085f7",
  measurementId: "G-ZS7DBRL21P",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
