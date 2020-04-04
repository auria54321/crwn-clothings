import firebase from 'firebase/app';
import 'firebase/';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvhy_NONEEv5pocJdK6jZZF3sd9qLSWS8",
    authDomain: "crwn-db-4a19a.firebaseapp.com",
    databaseURL: "https://crwn-db-4a19a.firebaseio.com",
    projectId: "crwn-db-4a19a",
    storageBucket: "crwn-db-4a19a.appspot.com",
    messagingSenderId: "422592652587",
    appId: "1:422592652587:web:4c6948d5aaf53ed46e516e"
};

firebase.initializeApp(config);

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
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
  