const TodoModel = function(todolist) {
  this.todolist = todolist;
};

TodoModel.prototype.commandAdd = function(addContents, addTag) {
  const makeId = util.createUniqueId();
  this.todolist.push({
    id: makeId,
    status: 'todo',
    contents: addContents,
    tag: util.getTag(addTag),
  });
  console.log(`${addContents}가 추가됐습니다. (id : ${makeId})`);
};

module.exports = TodoModel;
