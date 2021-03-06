var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


import * as actions from 'actions';

var {AddTodo} = require('AddTodo');

describe('AddTodo', () =>{
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch AddTodo when valid data entered', () =>{
    var todoText = 'Check mail';
    var action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    // Set a value to the textbox
    addtodo.refs.txtText.value = todoText;

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not dispatch AddTodo if invalid data entered', () =>{
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    // Set a value to the textbox
    addtodo.refs.txtText.value = '';

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
