var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Search} from 'Search';

describe('Search', () =>{
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT text on input change', () =>{
    var action = {type:'SET_SEARCH_TEXT', searchText:'text to find'};
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(search));

    // Set a value to the textbox
    search.refs.txtSearch.value = action.searchText;
    //Simulate the change
    TestUtils.Simulate.change(search.refs.txtSearch);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED on chkShowCompleted checkbox', () =>{
    var action = {type:'TOGGLE_SHOW_COMPLETED' };
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(search));

    // Set a value to the textbox
    search.refs.chkShowCompleted.checked = true;
    //Simulate the change
    TestUtils.Simulate.change(search.refs.chkShowCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
