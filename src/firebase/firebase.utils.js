import firebase from "firebase/app";
import "firebase/firestore";
import axios from "axios";
import "firebase/auth";
// -------------------------> FIREBASE <----------------------------------
const config = {
  apiKey: "AIzaSyAa68yAJ4QNHIOPeeXdDfu3tljVKphw-Xo",
  authDomain: "ecommerce-app-57873.firebaseapp.com",
  databaseURL: "https://ecommerce-app-57873.firebaseio.com",
  projectId: "ecommerce-app-57873",
  storageBucket: "ecommerce-app-57873.appspot.com",
  messagingSenderId: "793059014618",
  appId: "1:793059014618:web:81c9159b05e685b07072e3",
  measurementId: "G-6P17PWXG2Q",
};
firebase.initializeApp(config);
// ----------------------------------------------------------------------
export const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});

//
// Function called by App.js when user signs in
export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username: displayName,
        email,
        createdAt,
      });
      await api.post("/createprofile", {
        id: userAuth.uid,
      });
      await api.post("/createstats", {
        id: userAuth.uid,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Function called by DashBoardPage on mounting
export const fetchUserData = async (user) => {
  if (!user) {
    return;
  }
  const userRef = firestore.doc(`users/${user.id}`);
  const snapShot = await userRef.get();

  try {
    return snapShot.data();
  } catch (error) {
    console.log("error: ", error);
  }
};

//-----------------------------------------------------------------------------
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
