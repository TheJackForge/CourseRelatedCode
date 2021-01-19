import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDiPG7HKm0BIWfLpml-kgGeRKkHZo_lvA0",
    authDomain: "muso-ninjas-776e4.firebaseapp.com",
    projectId: "muso-ninjas-776e4",
    storageBucket: "muso-ninjas-776e4.appspot.com",
    messagingSenderId: "526979991967",
    appId: "1:526979991967:web:cbca0df25c142af6d895aa"
};

// init firebase 
firebase.initializeApp(firebaseConfig)

// init services 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }