import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgrcL3mEn3Zr-WEbuLs1M6aQ_mpznl_0Q",
    authDomain: "live-chat-6698f.firebaseapp.com",
    projectId: "live-chat-6698f",
    storageBucket: "live-chat-6698f.appspot.com",
    messagingSenderId: "936988717993",
    appId: "1:936988717993:web:28d98bf6a8fc32aa530ab8"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp}