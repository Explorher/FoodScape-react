
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOnRgzEwir7LGCjo0C8AvD2gHGexwxhC0",
  authDomain: "foodscape-react.firebaseapp.com",
  projectId: "foodscape-react",
  storageBucket: "foodscape-react.appspot.com",
  messagingSenderId: "378794149189",
  appId: "1:378794149189:web:83bdd0ae79ba0bf06bea2c",
  measurementId: "G-R295BHFPMN"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 

export const auth = getAuth(app);
const db=getFirestore(app);
 export {db};
 