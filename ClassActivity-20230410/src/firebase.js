import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQG5_kI3oMU_KPVo437amLLzwoRU1Cpc8",
    authDomain: "ecfood-react.firebaseapp.com",
    databaseURL: "https://ecfood-react-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ecfood-react",
    storageBucket: "ecfood-react.appspot.com",
    messagingSenderId: "590268993373",
    appId: "1:590268993373:web:a1ceb65aa766c9b078a2b4"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
