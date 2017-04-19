var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () =>{
  it('should exist', () => {
    expect(Todo).toExist();
  });
  it('should call onToggle with his id', () =>{
    var textToFind = 'text to find'
    var spy = expect.createSpy();
    var cmp = TestUtils.renderIntoDocument(<Todo id={1111} onToggle={spy} />);
    var $el = $(ReactDOM.findDOMNode(cmp));

    //Simulate the change 
    TestUtils.Simulate.click($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith(1111);
  });

});
