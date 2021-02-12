import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyC-fkR2usgC71PaQhV9QerWl-axNn957tU',
  authDomain: 'oms-photouploader.firebaseapp.com',
  projectId: 'oms-photouploader',
  storageBucket: 'oms-photouploader.appspot.com',
  messagingSenderId: '1027023301036',
  appId: '1:1027023301036:web:b44a87dca177958c943209',
  measurementId: 'G-QQ77S9BZ4H',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
