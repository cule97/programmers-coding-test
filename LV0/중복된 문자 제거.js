function solution(my_string) {
  return [...new Set(my_string)].join('');
}



function solution(my_string) {
  // 문자를 배열로 만든다
  let str = [...my_string];
  
  // Set객체를 이용하여 배열의 중복값을 없애준다
  // Set을 Array로 변환할 때 Array.from()을 이용하면 된다.
  let arr = Array.from(new Set(str));
  
  // 배열을 다시 문자열로 만들어서 출력
  return arr.join('');
}