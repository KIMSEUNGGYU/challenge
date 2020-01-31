// #명령어 컨트롤러 class
class TodoController {
  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  // #명령어 분할 메소드
  splitCommand(command) {
    const commandList = command.split('$$');
    return commandList;
  }

  // #첫번째 명령어 기준 메소드 선택 메소드
  selectAction(commandList) {
    try {
      switch (commandList[0]) {
        case 'show':
          this.todoModel.commandShow(commandList[1]);
          break;
        case 'add':
          this.todoModel.commandAdd(commandList[1], commandList[2]);
          break;
        case 'update':
          return new Promise((resolve, reject) => {
            this.todoModel.commandUpdate(commandList[1], commandList[2], resolve, reject);
          }).then(null, error => {
            console.error(`${error.message}\n`);
          });
        case 'delete':
          this.todoModel.commandDelete(commandList[1]);
          break;
        default:
          throw Error('올바르지 않은 명령어입니다');
          break;
      }
    } catch (error) {
      console.error(`${error.message}\n`);
    }
    return new Promise(resolve => resolve());
  }

  // #명령어 입력 메소드
  runTodo() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.setPrompt('명령하세요 : ');
    rl.prompt();
    rl.on('line', async command => {
      if (command === 'q') {
        rl.close();
      }
      const commandList = this.splitCommand(command);
      await this.selectAction(commandList);
      rl.prompt();
    });
    rl.on('close', () => process.exit());
  }
}

module.exports = TodoController;
