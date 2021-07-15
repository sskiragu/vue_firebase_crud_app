import firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyCPXfCHIXaAKBDGATNS2JzFrFnN4e7_cA4",
    authDomain: "master-d9449.firebaseapp.com",
    databaseURL: "https://master-d9449-default-rtdb.firebaseio.com",
    projectId: "master-d9449",
    storageBucket: "master-d9449.appspot.com",
    messagingSenderId: "534703447858",
    appId: "1:534703447858:web:c1e846f07afc217f4d412b",
    measurementId: "G-M7FF4YLYTS"
};

firebase.initializeApp(config);

export default firebase.database();
