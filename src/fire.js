import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAFsVxgWxUw-Iz5bfXFfHDqIfLVZl9dLKU",
    authDomain: "lit-notes-2903a.firebaseapp.com",
    projectId: "lit-notes-2903a",
    storageBucket: "lit-notes-2903a.appspot.com",
    messagingSenderId: "1006517181368",
    appId: "1:1006517181368:web:e5f35141a0f613df450d4d",
    measurementId: "G-XJZW1W9DPG"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
}

const fire = firebase;
export default fire;

