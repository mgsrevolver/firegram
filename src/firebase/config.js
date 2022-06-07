import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAx5GqBSUdxKuNpAoDnJ1ebMjeam-PO4UI',
  authDomain: 'shorty-gallery.firebaseapp.com',
  // databaseURL: 'https://the-net-ninja-sandbox.firebaseio.com',
  projectId: 'shorty-gallery',
  storageBucket: 'shorty-gallery.appspot.com',
  messagingSenderId: '614086498790',
  appId: '1:614086498790:web:829f34b61ec8932df1de27',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
