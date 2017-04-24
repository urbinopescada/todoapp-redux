import firebase from "firebase";

try {
  var config = {
    apiKey: "AIzaSyCSurAqXnLzo_ljXvU_xS9FveAr_btK7-s",
    authDomain: "mead-todo-app-cf99e.firebaseapp.com",
    databaseURL: "https://mead-todo-app-cf99e.firebaseio.com",
    projectId: "mead-todo-app-cf99e",
    storageBucket: "mead-todo-app-cf99e.appspot.com",
    messagingSenderId: "955533530547"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
} catch (e) {

} finally {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
