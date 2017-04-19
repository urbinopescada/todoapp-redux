var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var TodoApp = require("TodoApp");

const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(()=>{
  console.log("New state", store.getState());
});

store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());

////Load foundation using the css loader (ie: css!) and inject the styles into our html, we do that chaining the loaders
// require('style!css!foundation-sites/dist/css/foundation.min.css');

//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
