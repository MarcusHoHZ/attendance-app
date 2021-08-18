import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAb3gqRpW_txCQQgaOF31tOXH_iBOp1jtk",
    authDomain: "attendance-app-3c8b2.firebaseapp.com",
    databaseURL: "https://attendance-app-3c8b2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "attendance-app-3c8b2",
    storageBucket: "attendance-app-3c8b2.appspot.com",
    messagingSenderId: "628158695912",
    appId: "1:628158695912:web:72fa5dba8298c90939bc5d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  