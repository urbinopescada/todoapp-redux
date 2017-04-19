const uuid = require('node-uuid');
const moment = require('moment');

export var searchTextReducer = (state='', action) =>{
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state=false, action) =>{
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state=[], action) =>{
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          completed:false,
          text: action.text,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        if(todo.id===action.id) {
          var nextCompleted = !todo.completed;
          return {
            ...todo,
            completed : nextCompleted,
            completedAt : nextCompleted ? moment().unix(): null
          };
        }
        else {
          return todo;
        }
      });
    default:
      return state;
  }
};
