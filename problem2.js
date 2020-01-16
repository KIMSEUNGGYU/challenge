function problem2(inputNumber) {
  inputNumber[0] = Math.abs(inputNumber[0]);
  inputNumber[1] = Math.abs(inputNumber[1]);

  swap(inputNumber);
  uclid(inputNumber);
  console.log(inputNumber[0]);
}

function swap(inputNumber) {
  //input으로 입력받을시 return으로 반환해주지 않아도 된다.
  if (inputNumber[0] < inputNumber[1]) {
    [inputNumber[0], inputNumber[1]] = [inputNumber[1], inputNumber[0]];
  }
}

function uclid(inputNumber) {
  do {
    [inputNumber[0], inputNumber[1]] = [
      inputNumber[1],
      inputNumber[0] % inputNumber[1],
    ];
  } while (inputNumber[1] !== 0);
}

//problem2([18, 45]);
//problem2([2, 4]);
//problem2([15, 12]);
//problem2([30, 45]);
problem2([57, 15]);
