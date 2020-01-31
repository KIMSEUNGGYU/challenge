// #html파일 생성 class
class TodoHtmlView {
  constructor(todoModel) {
    this.todoModel = todoModel;
    this.todoModel.createView = this.createView;
  }

  // #html파일 생성 메소드
  createView(printStatus) {
    const fs = require('fs');
    const htmlContents = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TodoList Result</title>
      </head>
      <body>
        <h1>todolist</h1>
        <div class="log">
        ${printStatus}
        </div>
      </body>
    </html>`;
    fs.writeFile('../html/log.html', htmlContents, err => {});
  }
}

module.exports = TodoHtmlView;
