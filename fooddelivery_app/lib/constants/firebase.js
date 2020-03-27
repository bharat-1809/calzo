import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG34XfOfbxdWiTROx2XpQqVbXBjXxDC3w",
  authDomain: "foode-9d7f5.firebaseapp.com",
  databaseURL: "https://foode-9d7f5.firebaseio.com",
  projectId: "foode-9d7f5",
  storageBucket: "foode-9d7f5.appspot.com",
  messagingSenderId: "293454107544",
  appId: "1:293454107544:web:a30b431466ef96aaf251ed",
  measurementId: "G-BG5HZVF129"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
