const request = require('../node_modules/sync-request');
const util = require('./util.js');
const TodoModel = require('./TodoModel.js');
const TodoController = require('./TodoController.js');

const todolist = JSON.parse(request('GET', 'http://localhost:8090/get_data').getBody('utf-8'));

const todoModel = new TodoModel(todolist);
const controller = new TodoController(todoModel);
//controller.runTodo();
console.log(todolist);
