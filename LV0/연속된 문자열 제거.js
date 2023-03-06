function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[1 + i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
