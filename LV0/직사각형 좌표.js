function solution(v) {
  let answer = [0, 0];
  for (let i = 0; i < answer.length; i++) {
    if (v[0][i] === v[1][i]) {
      answer[i] = v[2][i];
    } else if (v[0][i] === v[2][i]) {
      answer[i] = v[1][i];
    } else {
      answer[i] = v[0][i];
    }
  }
  return answer;
}
