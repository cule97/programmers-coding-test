function solution(cipher, code) {
  return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}


function solution(cipher, code) {
  let answer=''
  let i=code-1
  while(i<cipher.length){
  answer+=cipher[i]
      i+=code
  }
  return answer;
}