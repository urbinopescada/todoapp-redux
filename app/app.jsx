var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory,} from 'react-router';

import TodoApp from "TodoApp";
import Login from 'Login';
var Main = require("Main");

const actions = require('actions');
import TodoAPI from 'TodoAPI';
import {configure} from 'configureStore';
const store = configure( );


// import "./playground-firebase.jsx";


// store.subscribe(() => {
//   var state = store.getState();
//   TodoAPI.setTodos(state.todos);
//   console.log("New state", store.getState());
// });

// var initialTodos =  TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());
//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" >
        <Route path="/todos" component={TodoApp}  />
        <IndexRoute component={Login}  />
      </Route>
    </Router>
</Provider>, document.getElementById('app'));
