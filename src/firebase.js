import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFlZ3kLRygMresABzBtY-7mDZlZ67snaw",
    authDomain: "linkedin-clone-yt-4f12b.firebaseapp.com",
    projectId: "linkedin-clone-yt-4f12b",
    storageBucket: "linkedin-clone-yt-4f12b.appspot.com",
    messagingSenderId: "664965778450",
    appId: "1:664965778450:web:fbd982b46ed281a3cddccb"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

 