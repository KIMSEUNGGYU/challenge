class TodoController {
  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  splitCommand(command) {
    const commandList = command.split('$$');
    return commandList;
  }

  selectAction(commandList) {
    switch (commandList[0]) {
      case 'show':
        console.log('show');
        break;
      case 'add':
        this.todoModel.commandAdd(commandList[1], commandList[2]);
        break;
      case 'update':
        this.todoModel.commandUpdate(commandList[1], commandList[2]);
        break;
      case 'delete':
        console.log('delete');
        break;
      default:
        console.error('올바르지 않은 명령어입니다');
        break;
    }
  }

  runTodo() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.setPrompt('명령하세요 : ');
    rl.prompt();
    rl.on('line', command => {
      if (command === 'q') {
        rl.close();
      }
      const commandList = this.splitCommand(command);
      this.selectAction(commandList);
      rl.prompt();
    });
    rl.on('close', () => process.exit());
  }
}

module.exports = TodoController;
