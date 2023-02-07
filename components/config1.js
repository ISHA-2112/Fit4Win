import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 const firebaseConfig = {
  apiKey: "AIzaSyBKOwym6lkZEUgh7rqpZEWaD9rExHTqr50",
  authDomain: "fit4win-3d2ee.firebaseapp.com",
  projectId: "fit4win-3d2ee",
  storageBucket: "fit4win-3d2ee.appspot.com",
  messagingSenderId: "618217309774",
  appId: "1:618217309774:web:4f58730378e5fe6c9b651f",
  measurementId: "G-CPWT7NBE5V"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};