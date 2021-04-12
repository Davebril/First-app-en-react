import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBRxcthlcC80DzQGATmKIZEsBvzemGljQQ",
    authDomain: "davidbril.firebaseapp.com",
    projectId: "davidbril",
    storageBucket: "davidbril.appspot.com",
    messagingSenderId: "218185769504",
    appId: "1:218185769504:web:4e83757a8a2957334d5245"
  });
  


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);



export function getFirebase() {
  return app;
}
export function getFirestore() {
  return db;
}
