var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () =>{
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () =>{
    it('sould render correct ammount of items',()=>{
        var todos= [
          {id:1, completed:false, text:'walk the dog'},
          {id:2, completed:false, text:'clean the garage'},
          {id:3, completed:true, text:'Wash the car'},
          {id:4, completed:false, text:'Prep my speach'}
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        //Other way - counting the components
        var nrOfTodoRendered = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(nrOfTodoRendered.length).toBe(4);
    });
  });

  it('sould render empty message',()=>{
      var todos= [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));
      expect($el.find('.container__message').length).toBe(1);
});
});
