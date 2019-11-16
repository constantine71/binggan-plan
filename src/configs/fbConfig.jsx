import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDJ8flQbigU2jHTuy5PnHy0d5GnjvYhGOw",
  authDomain: "binggan-plan.firebaseapp.com",
  databaseURL: "https://binggan-plan.firebaseio.com",
  projectId: "binggan-plan",
  storageBucket: "binggan-plan.appspot.com",
  messagingSenderId: "523718687748",
  appId: "1:523718687748:web:ac97d75a85cc45d6448951",
  measurementId: "G-XJEQT1XQLK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();
firebase.auth();

export default firebase;
