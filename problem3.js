function solution(s) {
  if (s.length == 4 || s.length == 6) {
    return isNaN(s) == false ? console.log('true') : console.log('false');
  } else {
    console.log('false');
  }
}

// function solution(s) {
//   if (s.length == 4 || s.length == 6) {
//     if (isNaN(s) == false) {
//       console.log('true');
//     } else {
//       console.log('false');
//     }
//   } else {
//     console.log('false');
//   }
// }

//solution('1234');
//solution('ab09s');
//solution('1111');
//solution('davnds');
//solution('ansc0asd');
//solution('145678');
solution('abcd09');
