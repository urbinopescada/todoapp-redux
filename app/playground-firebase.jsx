import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSurAqXnLzo_ljXvU_xS9FveAr_btK7-s",
  authDomain: "mead-todo-app-cf99e.firebaseapp.com",
  databaseURL: "https://mead-todo-app-cf99e.firebaseio.com",
  projectId: "mead-todo-app-cf99e",
  storageBucket: "mead-todo-app-cf99e.appspot.com",
  messagingSenderId: "955533530547"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunnig: true,
  user: {
    name: 'Urbino',
    age: 39
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added',(snapshot)=>{
  console.log('New todo', snapshot.key, snapshot.val());
});

todosRef.push({
  text:'Todo 1'
});
todosRef.push({
  text:'Todo 2'
});
// firebaseRef.once('value').then((snapshot)=>{
//   console.log('Entire db:', snapshot.val());
// }, (e)=>{
//   console.log('Unable to feach data...');
// });

// firebaseRef.on('value', (snapshot)=>{
//     console.log('Goto db:', snapshot.val());
// });
// firebaseRef.off();
//
//
// var firebaseListner = (snapshot)=>{
//     console.log('Goto db:', snapshot.val());
// };
// firebaseRef.on('value',firebaseListner);
// firebaseRef.off(firebaseListner);
//
// firebaseRef.update({
//   isRunnig: false,
//   'app/name': 'Todo Application2',
//   'user/name': 'Urbino Pescada'
// });
