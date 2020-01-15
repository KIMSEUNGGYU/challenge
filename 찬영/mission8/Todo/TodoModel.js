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

TodoModel.prototype.commandUpdate = function(updateId, updateStatus) {
  this.todolist.forEach((data, index) => {
    if (data.id === updateId) {
      this.todolist[index].status = updateStatus;
      console.log(`${data.contents}가 ${updateStatus}으로 상태가 변경됐습니다`);
    }
  });
};

TodoModel.prototype.commandDelete = function(updateId) {
  this.todolist.forEach((data, index) => {
    if (data.id === updateId) {
      this.todolist.splice(index, 1);
      console.log(`${data.contents}가 ${data.status}목록에서 삭제됐습니다`);
    }
  });
};

module.exports = TodoModel;
