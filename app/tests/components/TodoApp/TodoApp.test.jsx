var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todo list', () => {
    var store = configureStore.configure({todos: [{id:10,text:'1000'}]});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toBe(1);
  });
});
