// #Observer class
class Observer {
  constructor() {
    this.data;
  }
  update(printMessage) {
    this.data = printMessage;
    this.createView(this.data);
  }
}

module.exports = Observer;
