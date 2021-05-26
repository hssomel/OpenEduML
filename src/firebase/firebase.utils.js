import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import axios from "axios";
// -------------------------> FIREBASE <----------------------------------
const config = {
  apiKey: "AIzaSyBD87B8drIK2NNLr-5e4PMYMEDQmKDP8pw",
  authDomain: "kube-ml.firebaseapp.com",
  databaseURL: "https://kube-ml.firebaseio.com",
  projectId: "kube-ml",
  storageBucket: "kube-ml.appspot.com",
  messagingSenderId: "550937035835",
  appId: "1:550937035835:web:7f023a1d494c948592481e",
  measurementId: "G-MVRXP6G97S",
};
firebase.initializeApp(config);
// ----------------------------------------------------------------------
const api = axios.create({
  baseURL: `${process.env.REACT_APP_ADDR}/api/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});
// Function called by App.js when user signs in
export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`userprofiles/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // First time user has logged in -- so must create profile
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await api.post("/createprofile", {
        username: displayName,
        email,
        id: userAuth.uid,
        createdAt,
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
