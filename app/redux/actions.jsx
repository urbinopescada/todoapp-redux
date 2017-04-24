import firebase,{firebaseRef, githubProvider} from 'app/firebase/';
var moment = require('moment');


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};
export var startAddTodo = (text) => {
  return (dispach, getState )=>{
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var uid = getState().auth.uid;

    // Add to database
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(()=>{
      // when added to db, dispath the data event to update the store to then update views in browser
      dispach(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};
export var startAddTodos = () => {
  return (dispach, getState )=>{

    var uid = getState().auth.uid;
    return  firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot)=>{
      // when added to db, dispath the data event to update the store to then update views in browser
      var dbTodos  = snapshot.val() || {};

      var appTodos = Object.keys(dbTodos).map((key)=>{
        return {
          id: key,
          ...dbTodos[key]
        }
      });

      dispach(addTodos(appTodos));
    }, (e)=>{
      console.log('Unable to feach data...');
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};
export var startToggleTodo = (id, completed) => {
  return (dispach, getState)=>{
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    }

    return todoRef.update(updates).then(()=>{
      // when added to db, dispath the data event to update the store to then update views in browser
      dispach(updateTodo(id, updates));
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var startLogin = () => {
  return (dispach, getState)=>{
    return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
      console.log('Auth worked:', result);
    },(e)=>{
      console.log('Error',e);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout = () => {
  return (dispach, getState)=>{
    return firebase.auth().signOut().then(()=>{
      console.log("loggedout");
    },(e)=>{
      console.log("error in logout":e);
    })
  };
};
