import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

const actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'Anything we like',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate ADD_TODOS actions', ()=>{
    var todos =[
      { id:1111, text:'aaa',completed:false}
    ];

    var action = {   type: 'ADD_TODOS',        todos      };
      var res = actions.addTodos(action.todos);
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
