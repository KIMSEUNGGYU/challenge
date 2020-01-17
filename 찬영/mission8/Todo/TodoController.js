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
        this.todoModel.commandShow(commandList[1]);
        break;
      case 'add':
        this.todoModel.commandAdd(commandList[1], commandList[2]);
        break;
      case 'update':
        return new Promise(resolve => {
          this.todoModel.commandUpdate(commandList[1], commandList[2], resolve);
        });
      case 'delete':
        this.todoModel.commandDelete(commandList[1]);
        break;
      default:
        console.error('올바르지 않은 명령어입니다');
        break;
    }
    return new Promise(resolve => resolve());
  }

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
