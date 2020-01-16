function solution(s) {
  if (!isNaN(s) == true) {
    if (s.length === 4 || s.length === 6) {
      console.log(true);
    } else console.log(false);
  } else console.log(false);
}
//solution('1234');
//solution('a234');
//solution('123456');
//solution('12345678');
solution('5555');
