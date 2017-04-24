var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () =>{
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action', () =>{
    var todoData = {
      id:199,
      text:'some todo',
      completed: true
    };

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy = expect.createSpy();
    var cmp = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(cmp));

    //Simulate the change
    TestUtils.Simulate.click($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

});
