var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () => {
    it('sould render correct ammount of items', () => {
      var todos = [
        {
          id: 1,
          completed: false,
          text: 'walk the dog',
          completedAt: null,
          createdAt: 500
        }, {
          id: 2,
          completed: false,
          text: 'clean the garage',
          completedAt: null,
          createdAt: 500
        }, {
          id: 3,
          completed: true,
          text: 'Wash the car',
          completedAt: null,
          createdAt: 500
        }, {
          id: 4,
          completed: false,
          text: 'Prep my speach',
          completedAt: null,
          createdAt: 500
        }
      ];
      var store = configure({todos});
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
      );
      var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      var todos = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

      expect(todos.length).toBe(4);
    });

    it('sould render empty message', () => {
      var todos = [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));
      expect($el.find('.container__message').length).toBe(1);
    });
  });
});
