// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDykA3y2k5-hSC8ZpLal9HHEKaUVeCRH9Y",
  authDomain: "fitter-registration-form.firebaseapp.com",
  databaseURL: "https://fitter-registration-form-default-rtdb.firebaseio.com",
  projectId: "fitter-registration-form",
  storageBucket: "fitter-registration-form.appspot.com",
  messagingSenderId: "272796848005",
  appId: "1:272796848005:web:bb329c54520c66e3753eec",
  measurementId: "G-B0C42BR2G8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}