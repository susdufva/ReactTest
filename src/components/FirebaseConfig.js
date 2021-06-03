import dotenv from 'dotenv'
import firebase from "firebase"

dotenv.config();

console.log(process.env.REACT_APIKEY)


const firebaseConfig = {
    apiKey: "AIzaSyDE2FzNwHMF8_JDKDlovc0xLDhNVC23GYc",
    authDomain: "bookingproject-b8f14.firebaseapp.com",
    projectId: "bookingproject-b8f14",
    storageBucket: "bookingproject-b8f14.appspot.com",
    messagingSenderId: "574355717021",
    appId: "1:574355717021:web:664e935880a59dd6b28d74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //dessa steg krävs för att koppla firebase till sitt projekt //behöver inte sparas i const
  console.log(firebaseApp)

  const db = firebaseApp.firestore()

  export default db; 

  