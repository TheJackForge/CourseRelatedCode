import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIXbugR-MhKzT-2dwpKzIPtHsq_YlcF8U",
    authDomain: "udemy-vue-firebase-sites-5b68e.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-5b68e",
    storageBucket: "udemy-vue-firebase-sites-5b68e.appspot.com",
    messagingSenderId: "689431356898",
    appId: "1:689431356898:web:842ed043661019fa7845bb"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init firestore service

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }