var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import { hashHistory} from 'react-router';

import router from  'app/router/';
const actions = require('actions');
import {configure} from 'configureStore';
const store = configure( );

import firebase from "app/firebase/";

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else { 
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});



//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>
  , document.getElementById('app'));
