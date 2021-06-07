import dotenv from 'dotenv'
import firebase from "firebase"

dotenv.config();

console.log(process.env.REACT_APP_APIKEY)


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: "574355717021",
    appId: "1:574355717021:web:664e935880a59dd6b28d74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //dessa steg krävs för att koppla firebase till sitt projekt //behöver inte sparas i const
  console.log(firebaseApp)

  const db = firebaseApp.firestore()

  export default db; 

  