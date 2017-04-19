var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Search = require('Search');

describe('Search', () =>{
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should call onSearch with text entered', () =>{
    var textToFind = 'text to find'
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(search));

    // Set a value to the textbox
    search.refs.txtSearch.value = textToFind;
    //Simulate the change
    TestUtils.Simulate.change(search.refs.txtSearch);
    expect(spy).toHaveBeenCalledWith(false,textToFind);
  });

  it('should call onSearch with proper checked value', () =>{
    var textToFind = 'text to find'
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(search));

    // Set a value to the textbox
    search.refs.chkShowCompleted.checked = true;
    //Simulate the change
    TestUtils.Simulate.change(search.refs.chkShowCompleted);
    expect(spy).toHaveBeenCalledWith(true,'');
  });
});
