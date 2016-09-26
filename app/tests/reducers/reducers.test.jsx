var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'dog'
			};
		var res = reducers.searchTextReducer(df(''), df(action));

		expect(res).toEqual(action.searchText);	
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
			};
		var res = reducers.showCompletedReducer(df(false), df(action));

		expect(res).toEqual(true);	
		});
	});

	describe('todosReducer', () => {
		it('should add new todo item', () => {
			var action = {
			type: 'ADD_TODO',
			todo: {
				id: 'abc123',
				text: 'Walk the dog',
				completed: false,
				createdAt: 987654321
				}
			};
		var res = reducers.todosReducer(df([]), df(action));

		expect(res.length).toEqual(1);	
		expect(res[0]).toEqual(action.todo);
		});

		it('should toggle todo item', () => {
			var todos = [
				{
					id: '123',
					text: 'Get the mail',
					completed: true,
					createdAt: 456,
					completedAt: 789
				}
			];

			var action = {
				type: 'TOGGLE_TODO',
				id: '123'
			}
		var res = reducers.todosReducer(df(todos), df(action));

		expect(res[0].completed).toEqual(false);	
		expect(res[0].completedAt).toEqual(undefined);
		});

		it('should add exiting todos', () => {
		var todos = [{
			id: '111',
			text: 'Walk the dog',
			completed: false,
			completedAt: undefined,
			createdAt: '10000'
		}];

		var action = {
			type: 'ADD_TODOS',
			todos
		};
		var res = reducers.todosReducer(df([]), df(action));

		expect(res.length).toEqual(1);
		expect(res[0]).toEqual(todos[0]);
		});
	});
});