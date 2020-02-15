import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpdNtkTf3-oRKktMIkeLNnInQW0yQR4ao",
    authDomain: "alex-blog-76e50.firebaseapp.com",
    databaseURL: "https://alex-blog-76e50.firebaseio.com",
    projectId: "alex-blog-76e50",
    storageBucket: "alex-blog-76e50.appspot.com",
    messagingSenderId: "707902312153",
    appId: "1:707902312153:web:ff3690f01da3d8cd7c78c8",
    measurementId: "G-YY19RHTQTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase