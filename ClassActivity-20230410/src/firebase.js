import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDQG5_kI3oMU_KPVo437amLLzwoRU1Cpc8",
    authDomain: "ecfood-react.firebaseapp.com",
    databaseURL: "https://ecfood-react-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ecfood-react",
    storageBucket: "ecfood-react.appspot.com",
    messagingSenderId: "590268993373",
    appId: "1:590268993373:web:35f4709e1b91438378a2b4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;