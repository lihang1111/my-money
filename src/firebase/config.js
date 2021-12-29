import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAYu11ZqiycTkSdymuy0jSaelzJxGedZ64",
  authDomain: "mymoney-ddaa0.firebaseapp.com",
  projectId: "mymoney-ddaa0",
  storageBucket: "mymoney-ddaa0.appspot.com",
  messagingSenderId: "896915689749",
  appId: "1:896915689749:web:5247bd5f7ecdf30f49991c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }