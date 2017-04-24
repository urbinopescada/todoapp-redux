import firebase,{firebaseRef} from 'app/firebase/';
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
    // Add to database
    var todoRef = firebaseRef.child('todos').push(todo);

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

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
