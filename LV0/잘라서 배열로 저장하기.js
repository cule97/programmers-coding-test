function solution(my_str, n) {
  let str = my_str.split('');
  let result = [];
  while (str.length > 0) {
    result.push(str.splice(0, n).join(''));
  }
  return result;
}
