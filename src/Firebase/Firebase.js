import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS8YJgeSA_UUhFR_bx-BQgyM9YCmX63BI",
  authDomain: "linkedin-clone-2de1d.firebaseapp.com",
  projectId: "linkedin-clone-2de1d",
  storageBucket: "linkedin-clone-2de1d.appspot.com",
  messagingSenderId: "554750931223",
  appId: "1:554750931223:web:003775138d116362f24752",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
const serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp();

export { firestore, auth, serverTimeStamp };
