import firebase from  'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";

const config ={
        apiKey: "AIzaSyBtNS3VdU6ZDe2iHmfD59UXi-qI4a6doR8",
        authDomain: "plant-db-66a26.firebaseapp.com",
        projectId: "plant-db-66a26",
        storageBucket: "plant-db-66a26.appspot.com",
        messagingSenderId: "546986862204",
        appId: "1:546986862204:web:aa7e2f67666af7b4a94bf9",
        measurementId: "G-WKG3ZBQLFD"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) =>{
 if(!userAuth) return;
     const userRef = firestore.doc(`user/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData})
        }catch(error){
          console.log('error creating user', error.message);
        }
     }
     return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
