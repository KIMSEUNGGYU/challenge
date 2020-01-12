// #상숫값 선언
const RANGE_ID = 10000;
const EXTRACT_REG = /['" \[\]]/g;

// #todo 데이터 보관 객체
const todoData = {
  todo: [
    { id: 123, contents: '자바스크립트 공부하기', tag: ['favorite'] },
    { id: 124, contents: 'ios공부하기', tag: ['favorite'] },
  ],
  doing: [
    { id: 125, contents: '리액트 공부하기', tag: ['favorite'] },
    { id: 444, contents: '타입스크립트 공부하기', tag: ['favorite'] },
  ],
  done: [],
};

// #명령어 입력 함수 (main)
function inputCommand() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('명령하세요 : ', command => {
    const commandList = splitCommand(command);
    selectAction(commandList);
    rl.close();
    if (command !== 'q') {
      inputCommand();
    }
  });
}

// #명령어 분리 함수
function splitCommand(command) {
  const commandList = command.split('$$');
  return commandList;
}

// #부모 명령어 실행 함수
function selectAction(commandList) {
  switch (commandList[0]) {
    case 'q':
      return;
    case 'show':
      commandShow(commandList[1]);
      break;
    case 'add':
      commandAdd(commandList[1], commandList[2]);
      break;
    case 'update':
      commandUpdate(commandList[1], commandList[2]);
      break;
    case 'delete':
      commandDelete(commandList[1]);
      break;
    default:
      errorMessage('올바르지 않은 명령어입니다');
      break;
  }
}

// #ID 생성 함수
function createId() {
  while (1) {
    const makeRandomNumber = Math.floor(Math.random() * RANGE_ID);
    if (isUnique(makeRandomNumber)) {
      return makeRandomNumber;
    }
  }
}

// #ID 중복 확인 함수
function isUnique(number) {
  let unique = true;
  for (let key in todoData) {
    todoData[key].forEach(data => {
      if (data.id === number) {
        unique = false;
      }
    });
  }
  return unique;
}

// #현재상태 출력 함수
function printStatus() {
  const idList = [];
  for (let key in todoData) {
    idList.push(todoData[key].map(data => data.id));
  }
  const output = idList.reduce((outputMessage, id, index) => {
    return (
      outputMessage +
      `${Object.keys(todoData)[index]}: [${id}]${index !== idList.length - 1 ? ', ' : '\n'}`
    );
  }, '현재상태 : ');
  console.log(output);
}

// #리스트 출력 함수
function printTodoList(listName) {
  for (let key in todoData) {
    if (key === listName) {
      if (todoData[key].length === 0) {
        console.log(`검색된 ${listName}리스트가 없습니다.\n`);
        break;
      }
      const output = todoData[key].reduce((outputMessage, data, index) => {
        return (
          outputMessage +
          `'${data.contents}, ${data.id}번'${index !== todoData[key].length - 1 ? ', ' : '\n'}`
        );
      }, `${listName}리스트 : 총${todoData[key].length}건 : `);
      console.log(output);
    }
  }
}

// #TAG 문자열에서 태그값 추출 함수
function getArray(string) {
  const outputArray = string.replace(EXTRACT_REG, '').split(',');
  return outputArray;
}

// #ID값으로 DATA 검색 함수
function searchData(id) {
  const idAddr = [];
  for (let key in todoData) {
    todoData[key].forEach((data, index) => {
      if (data.id === id) {
        idAddr.push(key, index, data.contents);
      }
    });
  }
  if (idAddr === []) {
    errorMessage('존재하지 않는 id값 입니다');
    idAddr.push(0);
  }
  return idAddr;
}

// #DATA 삭제 함수
function deleteData(idAddr) {
  todoData[idAddr[0]].splice(idAddr[1], 1);
}

// #DELAY 함수
function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

// #에러 메시지 출력 함수
function errorMessage(text) {
  console.error(`${text}\n`);
}

// #부모 명령어 함수
// // #SHOW 명령어 함수
function commandShow(showContents) {
  if (showContents === 'current') {
    printStatus();
  } else if (showContents === 'todo' || showContents === 'doing' || showContents === 'done') {
    printTodoList(showContents);
  } else {
    errorMessage('올바르지 않은 명령어입니다');
  }
}

// // #ADD 명령어 함수
function commandAdd(addContents, addTag) {
  const makeId = createId();
  todoData.todo.push({ id: makeId, contents: addContents, tag: getArray(addTag) });
  console.log(`${addContents}가 추가됐습니다. (id : ${makeId})`);
  printStatus();
}

// // #UPDATE 명령어 함수
function commandUpdate(updateId, updateStatus) {
  const idAddr = searchData(parseInt(updateId));
  if (idAddr[0]) {
    todoData[updateStatus].push(todoData[idAddr[0]][idAddr[1]]);
    deleteData(idAddr);
    sleep(2000);
    console.log(`${idAddr[2]} ${updateStatus}으로 상태가 변경됐습니다`);
    printStatus();
  }
}

// // #DELETE 명령어 함수
function commandDelete(updateId) {
  const idAddr = searchData(parseInt(updateId));
  if (idAddr[0]) {
    deleteData(idAddr);
    console.log(`${idAddr[2]}가 ${idAddr[0]}목록에서 삭제됐습니다`);
    printStatus();
  }
}

inputCommand();
