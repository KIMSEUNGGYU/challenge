const todolist = require('./todolist.js');
const express = require('../node_modules/express');
const app = express();
const SERVER_PORT = 8090;

app.get('/get_data', (req, res, next) => {
  return res.send(todolist);
});

app.listen(SERVER_PORT);
