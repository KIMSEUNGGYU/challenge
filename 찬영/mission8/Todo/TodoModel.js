// #명령어 실행 class
const Observer = require('./Observable.js');
const TodoModel = function(todolist) {
  this.todolist = todolist;
  this.createView;
};

TodoModel.prototype = new Observer();

// #show명령어 실행 메소드
TodoModel.prototype.commandShow = function(showContents) {
  if (showContents === 'current') {
    this.printStatus();
  } else if (showContents === 'todo' || showContents === 'doing' || showContents === 'done') {
    this.printTodoList(showContents);
  } else {
    throw Error('show 명령어 입력값 에러');
  }
};

// #add명령어 실행 메소드
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

// #update명령어 실행 메소드
TodoModel.prototype.commandUpdate = function(updateId, updateStatus, resolve, reject) {
  let statusCheck = false;
  this.todolist.forEach((data, index) => {
    if (data.id === updateId) {
      statusCheck = true;
      this.todolist[index].status = updateStatus;
      setTimeout(() => {
        console.log(`${data.contents}가 ${updateStatus}으로 상태가 변경됐습니다`);
        this.printStatus();
        resolve();
      }, 3000);
    }
  });
  if (!statusCheck) {
    reject(Error('update 명령어 입력값 에러 : 입력한 아이디나 상태가 존재하지 않음'));
  }
};

// #delete명령어 실행 메소드
TodoModel.prototype.commandDelete = function(deleteId) {
  let statusCheck = false;
  this.todolist.forEach((data, index) => {
    if (data.id === deleteId) {
      statusCheck = true;
      this.todolist.splice(index, 1);
      console.log(`${data.contents}가 ${data.status}목록에서 삭제됐습니다`);
    }
  });
  if (!statusCheck) {
    throw Error('delete 명령어 입력값 에러 : 입력한 아이디가 존재하지 않음');
  }
  this.printStatus();
};

// #상태 출력 메소드
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

// #리스트 출력 메소드
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
  this.update(output);
};

module.exports = TodoModel;
