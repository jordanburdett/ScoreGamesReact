import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB2aJwBVVsCSVzX_MnSHAbO5gXgn59CeXs",
  authDomain: "scoregames-c0233.firebaseapp.com",
  databaseURL: "https://scoregames-c0233.firebaseio.com",
  projectId: "scoregames-c0233",
  storageBucket: "scoregames-c0233.appspot.com",
  messagingSenderId: "475132375224",
  appId: "1:475132375224:web:206d8be3fc01e8faa6044d",
  measurementId: "G-RQT21T265Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase