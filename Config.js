import { firebase } from '@firebase/app';
require ("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBJn0syB4r0YqjhKTjv_IIyLyT3Kkh_XnY",
    authDomain: "wily-app-11d1f.firebaseapp.com",
    databaseURL: "https://wily-app-11d1f.firebaseio.com",
    projectId: "wily-app-11d1f",
    storageBucket: "wily-app-11d1f.appspot.com",
    messagingSenderId: "863841547145",
    appId: "1:863841547145:web:824b04b9bc0a27cd646758"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();