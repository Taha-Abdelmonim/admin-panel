import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCH31um1DG0H6KjiRny-haKic9pQlZHwSM",
  authDomain: "vue-ecommerce-e3696.firebaseapp.com",
  databaseURL: "https://vue-ecommerce-e3696.firebaseio.com",
  projectId: "vue-ecommerce-e3696",
  storageBucket: "vue-ecommerce-e3696.appspot.com",
  messagingSenderId: "12807825913",
  appId: "1:12807825913:web:8af94ae4208c50b3b67528",
  measurementId: "G-MJ1R24CCHJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
