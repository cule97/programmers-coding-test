//공을 받은 사람이 아니고 던진 사람이기 때문에 k - 1
// 한 사람씩 건너뛰므로 *2 값을 배열의 길이로 나눈 값이 정답
function solution(n, k) {
  return n[((k - 1) * 2) % n.length];
}
