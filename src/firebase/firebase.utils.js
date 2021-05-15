import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// ---------------------------------------------------------------------
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

// Function called by App.js when user signs in
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`userprofiles/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username: displayName,
        email,
        createdAt,
        firstname: null,
        lastname: null,
        college: null,
        postal: null,
        ...additionalData,
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

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         clusterFailed: false, // set to true if Jupyter helm initialization fails
//         clusterURL: null,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }
//   return userRef;
// };
