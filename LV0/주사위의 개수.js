function solution(box, n) {
  var answer = 0;
  return box.reduce((a,b)=>a*Math.floor(b/n),1)
}