function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(my_string) {
  return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}

function solution(my_string) {
  let result = 0
  for(let i = 0 ; i < my_string.length;i++) {
      // 이번 반복의 연속되는 숫자를 문자열로 취득
      let thisNum = ''
      while(!Number.isNaN(Number(my_string[i]))) {
          thisNum+= my_string[i]
          i++
      }
      // 문자가 온 경우 취득되었던 숫자를 Number형으로 변환 후 result에 더함
      result+= +thisNum
  }
  return result
}