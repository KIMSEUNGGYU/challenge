function problem2(inputNumber) {
  //최대공약수 유클리드호제법을 이용해 풀어보기
  inputNumber[0] = Math.abs(inputNumber[0]);
  inputNumber[1] = Math.abs(inputNumber[1]);

  swap(inputNumber);
  uclid(inputNumber);
  console.log(inputNumber[0]);
}

function swap(inputNumber) {
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
//problem2([57, 15]);
