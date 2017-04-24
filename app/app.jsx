var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory,} from 'react-router';

var TodoApp = require("TodoApp");

const actions = require('actions');
import TodoAPI from 'TodoAPI';
import {configure} from 'configureStore';
const store = configure( );


// import "./playground-firebase.jsx";


store.subscribe(() => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
  console.log("New state", store.getState());
});

var initialTodos =  TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
  <TodoApp/>
</Provider>, document.getElementById('app'));
