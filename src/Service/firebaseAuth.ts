import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB5ENPnfIoarsc4JF8nH7hKXujVqgv3X6Y",
  authDomain: "react-realtime-chat-7d57d.firebaseapp.com",
  projectId: "react-realtime-chat-7d57d",
  storageBucket: "react-realtime-chat-7d57d.appspot.com",
  messagingSenderId: "274061365669",
  appId: "1:274061365669:web:7b91be8441089f21dd584c",
});

export const auth: any = firebase.auth();
export const firestore: any = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};
