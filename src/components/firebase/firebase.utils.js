import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBbEpaNfD1GD1Kg3DT-N4E-1hqCxuxXECk",

  authDomain: "ecomm-clothing-266cf.firebaseapp.com",

  projectId: "ecomm-clothing-266cf",

  storageBucket: "ecomm-clothing-266cf.appspot.com",

  messagingSenderId: "834450035345",

  appId: "1:834450035345:web:937cc6090c68b14380e530",

  measurementId: "G-1LPHEF8K2P",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
