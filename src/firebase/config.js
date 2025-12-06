import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC26Hxh9ZxGbmaQR9wqUMsnZyFQIA5geg0",
  authDomain: "event-manager-1ab57.firebaseapp.com",
  projectId: "event-manager-1ab57",
  storageBucket: "event-manager-1ab57.appspot.com",
  messagingSenderId: "319258535040",
  appId: "1:319258535040:web:4cf335176baf008ad23265"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
