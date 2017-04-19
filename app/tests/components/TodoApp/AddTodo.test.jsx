var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () =>{
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid data entered', () =>{
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    // Set a value to the textbox
    addtodo.refs.txtText.value = 'new todo';

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('new todo');
  });
  it('should not call onAddTodo if invalid data entered', () =>{
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    // Set a value to the textbox
    addtodo.refs.txtText.value = '';

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  }); 
});
