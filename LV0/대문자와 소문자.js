function solution(my_string) {
  var answer = '';
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}


function solution(my_string) {
  let b=''
  let a=my_string.toLowerCase();
  for(i=0;i<my_string.length;i++){
  if(my_string[i]===a[i]){
     b=b+my_string[i].toUpperCase()
  }
  else b=b+ my_string[i].toLowerCase();
 
}
   return b
}