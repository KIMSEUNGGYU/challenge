const Observer = require('./Observable.js');
const TodoModel = function(todolist) {
  this.todolist = todolist;
  this.createView;
};

TodoModel.prototype = new Observer();

TodoModel.prototype.commandShow = function(showContents) {
  if (showContents === 'current') {
    this.printStatus();
  } else if (showContents === 'todo' || showContents === 'doing' || showContents === 'done') {
    this.printTodoList(showContents);
  }
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
  this.printStatus();
};

TodoModel.prototype.commandUpdate = function(updateId, updateStatus, resolve) {
  this.todolist.forEach((data, index) => {
    if (data.id === updateId) {
      this.todolist[index].status = updateStatus;
      setTimeout(() => {
        console.log(`${data.contents}가 ${updateStatus}으로 상태가 변경됐습니다`);
        this.printStatus();
        resolve();
      }, 3000);
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
  this.printStatus();
};

TodoModel.prototype.printStatus = function() {
  const statusList = ['todo', 'doing', 'done'];
  const idList = statusList.map((status, index) => {
    const list = [];
    this.todolist.forEach(data => {
      if (statusList[index] === data.status) {
        list.push(data.id);
      }
    });
    return list;
  });

  const output = idList.reduce((outputMessage, id, index) => {
    return (
      outputMessage + `${statusList[index]}: [${id}]${index !== idList.length - 1 ? ', ' : '\n'}`
    );
  }, '현재상태 : ');
  console.log(output);
  this.update(output);
};

TodoModel.prototype.printTodoList = function(listName) {
  const list = [];
  this.todolist.forEach(data => {
    if (data.status === listName) {
      list.push([data.id, data.contents]);
    }
  });
  const output = list.reduce((outputMessage, data, index) => {
    return outputMessage + `'${data[1]}, ${data[0]}번'${index !== list.length - 1 ? ', ' : '\n'}`;
  }, `${listName}리스트 : 총${list.length}건 : `);
  console.log(output);
};

module.exports = TodoModel;
