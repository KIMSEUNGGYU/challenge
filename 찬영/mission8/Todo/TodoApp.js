const request = require('../node_modules/sync-request');
const util = require('./util.js');
const TodoModel = require('./TodoModel.js');
const TodoController = require('./TodoController.js');
const TodoHtmlView = require('./TodoHtmlView.js');

const todolist = JSON.parse(request('GET', 'http://localhost:8090/get_data').getBody('utf-8'));

const todoModel = new TodoModel(todolist.data);
const controller = new TodoController(todoModel);
new TodoHtmlView(todoModel);
controller.runTodo();
