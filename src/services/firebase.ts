import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRVi4VfmOiUUyltRl18obMO6BFzQtduSA",
  authDomain: "elective-selector-auth.firebaseapp.com",
  projectId: "elective-selector-auth",
  storageBucket: "elective-selector-auth.appspot.com",
  messagingSenderId: "954344416341",
  appId: "1:954344416341:web:4500dc160d81e2e29aa0dc",
  measurementId: "G-2LTESM5FSD",
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
