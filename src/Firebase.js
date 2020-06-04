import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCxdfBGOnla5L38mGZx_kVgdgREOp2HUj0",
    authDomain: "m-city-70659.firebaseapp.com",
    databaseURL: "https://m-city-70659.firebaseio.com",
    projectId: "m-city-70659",
    storageBucket: "m-city-70659.appspot.com",
    messagingSenderId: "79803709523",
    appId: "1:79803709523:web:82bb1ae1b33c049718aea6",
    measurementId: "G-TS7ZHLH679"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches')
  const firebasePromotions = firebaseDB.ref('promotions')
 export {
     firebase,
     firebaseMatches,
     firebasePromotions    
 }
  