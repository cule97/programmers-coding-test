function solution(p, n) {
  let division = p.slice(0, 3);
  let hour = Number(p.slice(3, 5));
  let minute = Number(p.slice(6, 8));
  let second = Number(p.slice(9)) + n;
  if (division == 'PM ') {
    hour = hour + 12;
  }
  if (division == 'AM ' && hour == 12) {
    hour = '00';
  }
  if (second >= 60) {
    minute = minute + Math.floor(second / 60);
    second = second % 60;
  }
  if (minute >= 60) {
    hour = hour + Math.floor(minute / 60);
    minute = minute % 60;
  }

  if (hour > 24) {
    hour = hour % 24;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (hour == 24) {
    hour = '00';
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return `${hour}:${minute}:${second}`;
}
