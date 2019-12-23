import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCruiq756ebLYg0Km8Z_kxS2NbYNdaKTa0",
    authDomain: "expensify-906cb.firebaseapp.com",
    databaseURL: "https://expensify-906cb.firebaseio.com",
    projectId: "expensify-906cb",
    storageBucket: "expensify-906cb.appspot.com",
    messagingSenderId: "223619817613",
    appId: "1:223619817613:web:0c8a8868f10162119942c4",
    measurementId: "G-3PRB4YCCNS"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  firebase.database().ref().set({
      name: 'Gabs'
  });
  