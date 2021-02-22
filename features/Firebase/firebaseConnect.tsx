import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSsthruiBd1FYsGJ_SyBxCMcV8OvEpTTc",
    authDomain: "scoregamesrewrite.firebaseapp.com",
    projectId: "scoregamesrewrite",
    databaseURL: "https://scoregamesrewrite-default-rtdb.firebaseio.com/",
    storageBucket: "scoregamesrewrite.appspot.com",
    messagingSenderId: "668030118825",
    appId: "1:668030118825:web:dcce22864ddba8afb2b2b8",
    measurementId: "G-Q1ZXRZP21R"
  };

  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
  var auth = firebase.auth();

  module.exports.database = database;
  module.exports.firebase = firebase;
  module.exports.auth = auth;