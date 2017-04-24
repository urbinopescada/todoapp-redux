var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'some text',
                completed: true
            }, {
                id: 2,
                text: 'OTHer text',
                completed: false
            }, {
                id: 3,
                text: 'some text',
                completed: true
            }
        ];
        it('should return all items if showCompleted is true and no searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only non-completed if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
            expect(filteredTodos[1].completed).toBe(true);
            expect(filteredTodos[2].completed).toBe(true);
        });
        it('should filter by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
            expect(filteredTodos.length).toBe(1);
        });
    });
});
