import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase/';

const actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should generate setSearchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some text to search for',
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'Anything we like',
        completed: false,
        createdAt: 0,
      },
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({type: 'ADD_TODO'});
      expect(actions[0].todo).toInclude({text: todoText});
      done();
    }).catch(done);
  });

  it('should generate ADD_TODOS actions', () => {
    var todos = [
      {
        id: 1111,
        text: 'aaa',
        completed: false,
      }
    ];

    var action = {
      type: 'ADD_TODOS',
      todos,
    };
    var res = actions.addTodos(action.todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 10010,
      updates: {
        completed: false
      },
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = todosRef.push();
        testTodoRef.set({text: 'something to do', completed: false, createdAt: 123434})
      }).then(() => done()).catch(done)

    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispach UPDATE_TODO action', (done) => {
      const store = createMockStore();
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({type: "UPDATE_TODO", id: testTodoRef.key,});

        expect(mockActions[0].updates).toInclude({completed: true});
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done)
    });
    describe('ADD_TODOS', ()=>{

    });

    it('should dispach ADD_TODOS action', (done) => {
      const store = createMockStore();
      const action = actions.startAddTodos();
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        try {
          expect(mockActions[0]).toInclude({type: "ADD_TODOS"});
          expect(mockActions[0].todos[0]).toExist();
          expect(mockActions[0].todos[0].text).toBe('something to do');
          done();
        } catch (e) {
          done(e);
        }
      }, done)

    });

  });

});
