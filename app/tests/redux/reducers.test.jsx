const expect = require('expect');
const deepfreeze = require('deep-freeze-strict'); //is used to guarantie that the function is pure and do not change inputs


const reducers = require('reducers');

describe('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('should set searchText',()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(deepfreeze(''), deepfreeze(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',()=>{
    it('should toggle showCompleted',()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(deepfreeze(false), deepfreeze(action));
      expect(res).toBe(true);
    });
  });

  describe('authReducer',()=>{
    it('should Login',()=>{
      var action = {
        type: 'LOGIN',
        uid:'asderfsoi3238'
      };

      var res = reducers.authReducer(deepfreeze({}), deepfreeze(action));
      expect(res.uid).toBe(action.uid);
    });
  });

  describe('todosReducer',()=>{
    var toggleAction;
    var state = [];
    var createdTodoId;

    it('should add new todo',()=>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      state = reducers.todosReducer(deepfreeze([]), deepfreeze(action));
      expect(state.length).toEqual(1);
      expect(state[0].text).toEqual(action.todo.text);
      expect(state[0].id).toExist();

      createdTodoId = state[0].id;

    });

    it('should toggle todo to completed',()=>{
      var updates = {
        completed: true,
        completedAt: 125
      }
      toggleAction = {
        type: 'UPDATE_TODO',
        id: createdTodoId,
        updates
      };

      state = reducers.todosReducer(deepfreeze(state), deepfreeze(toggleAction));
      expect(state[0].completed).toEqual(true);
      expect(state[0].completedAt).toBeA("number");
    });

    it('should toggle todo to not completed',()=>{
      var updates = {
        completed: false,
        completedAt: null
      }
      toggleAction = {
        type: 'UPDATE_TODO',
        id: createdTodoId,
        updates
      };
      state = reducers.todosReducer(deepfreeze(state), deepfreeze(toggleAction));
      expect(state[0].completed).toEqual(false);
      expect(state[0].completedAt).toNotExist();
    });


    it('should add new todos',()=>{
      var todos =[
        { id:1111, text:'aaa',completed:false}
      ];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      state = reducers.todosReducer(deepfreeze([]), deepfreeze(action));
      expect(state.length).toEqual(1);
      expect(state[0].text).toEqual(todos[0].text);
      expect(state[0].id).toBe(todos[0].id);

    });

    it('should wipe todos on logout',()=>{
      var todos =[
        { id:1111, text:'aaa',completed:false}
      ];
      var action = {
        type: 'LOGOUT',
        todos
      };
      state = reducers.todosReducer(deepfreeze(todos), deepfreeze(action));
      expect(state.length).toEqual(0);
    });
  });
});
