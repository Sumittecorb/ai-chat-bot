// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from "firebase/app";
// import firebase from 'firebase/compat/app';


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export default app;
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDB_MkwJcgkozu7l2rR_OVYTlNCJ86BS5E",
  authDomain: "ai-chatboat.firebaseapp.com",
  projectId: "ai-chatboat",
  storageBucket: "ai-chatboat.appspot.com",
  messagingSenderId: "353915306645",
  appId: "1:353915306645:web:6d2a53a65eb0915143d19c",
  measurementId: "G-CW04LRW1W7"
};

// Use this to initialize the firebase App
 export const app = initializeApp(firebaseConfig);
// Use these for db & auth




