  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAoal3G5K_CmpLOZ-MAYEiDCf8A5z7yWtE",
    authDomain: "net-ninja-marioplan-9c9e8.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-9c9e8.firebaseio.com",
    projectId: "net-ninja-marioplan-9c9e8",
    storageBucket: "net-ninja-marioplan-9c9e8.appspot.com",
    messagingSenderId: "524343881021",
    appId: "1:524343881021:web:d8d3c65360453398"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;