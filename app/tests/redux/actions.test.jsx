const expect = require('expect');
const actions = require('actions');

describe('actions', ()=> {
  it('should generate setSearchText action', ()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText:'some text to search for'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', ()=>{
    var action = {
      type: 'ADD_TODO',
      text:'some thing'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
  it('should generate toggleShowCompleted action', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('should generate toggleTodo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id:10010
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
