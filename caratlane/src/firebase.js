import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDvZDaKjmSLQvUgM2N5a3GMTGdpW1FIK3k",
    authDomain: "caratlane-598e7.firebaseapp.com",
    projectId: "caratlane-598e7",
    storageBucket: "caratlane-598e7.appspot.com",
    messagingSenderId: "317982375529",
    appId: "1:317982375529:web:56fd884dc760782873acf8",
    measurementId: "G-2ZV9FWKQEM"
  };
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);