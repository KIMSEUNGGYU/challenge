const util = require('./util.js');
const TodoModel = require('./TodoModel.js');
const TodoController = require('./TodoController.js');

// 임시 데이터 값
const todolist = [
  { id: '1234', status: 'todo', contents: 'test1', tag: ['test1, test2'] },
  { id: '1235', status: 'todo', contents: 'test2', tag: ['test1, test2'] },
  { id: '1236', status: 'todo', contents: 'test3', tag: ['test1, test2'] },
  { id: '1237', status: 'todo', contents: 'test4', tag: ['test1, test2'] },
];

const todoModel = new TodoModel(todolist);
const controller = new TodoController(todoModel);
controller.runTodo();
