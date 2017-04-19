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
});
