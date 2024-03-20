import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDvZDaKjmSLQvUgM2N5a3GMTGdpW1FIK3k",
    authDomain: "caratlane-598e7.firebaseapp.com",
    projectId: "caratlane-598e7",
    storageBucket: "caratlane-598e7.appspot.com",
    messagingSenderId: "317982375529",
    appId: "1:317982375529:web:56fd884dc760782873acf8",
   
  };
  const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
 export const auth = getAuth(app);
 export{googleAuthProvider,facebookAuthProvider};