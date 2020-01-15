const util = require('./util.js');
const TodoModel = require('./TodoModel.js');
const TodoController = require('./TodoController.js');

// 임시 데이터 값
const todolist = {};

const todoModel = new TodoModel(todolist);
const controller = new TodoController();
controller.runTodo();
