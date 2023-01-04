function solution(my_string) {
  let a= my_string.split('').filter((a)=>!Number.isNaN(+a)).map(a => +a).sort((a,b)=> a - b)
   return a
}