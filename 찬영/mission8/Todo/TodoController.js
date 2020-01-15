class TodoController {
  splitCommand(command) {
    const commandList = command.split('$$');
    return commandList;
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
      rl.prompt();
    });
    rl.on('close', () => process.exit());
  }
}

const controller = new TodoController();
controller.runTodo();
