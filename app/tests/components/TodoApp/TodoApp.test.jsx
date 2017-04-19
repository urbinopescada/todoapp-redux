var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () =>{
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  var text = "new todo";

  it('should create new todo on handleNewTodo',()=>{
      todoApp.setState({todos:[]});
      todoApp.handleNewTodo(text);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(text);
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should set completed=true on first handleToggle',()=>{
      todoApp.handleToggle(todoApp.state.todos[0].id);
      expect(todoApp.state.todos[0].completed).toBe(true);
      expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('should set completed=false on second handleToggle',()=>{
      todoApp.handleToggle(todoApp.state.todos[0].id);
      expect(todoApp.state.todos[0].completed).toBe(false);
      expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
