function solution(age) {
  var answer = 'abcdefghijk';
  return Array.from(age.toString()).map((el)=>answer[+el]).join('')
}