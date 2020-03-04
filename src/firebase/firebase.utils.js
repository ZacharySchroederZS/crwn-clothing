import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCugIsvhLs_STDAUGDQ25kp0hfYY_JHXM",
    authDomain: "crwn-db-2d12e.firebaseapp.com",
    databaseURL: "https://crwn-db-2d12e.firebaseio.com",
    projectId: "crwn-db-2d12e",
    storageBucket: "crwn-db-2d12e.appspot.com",
    messagingSenderId: "323907744881",
    appId: "1:323907744881:web:536b4f727a3dc3ffabd7d0"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;