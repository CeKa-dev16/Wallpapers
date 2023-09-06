const hour = document.querySelector('.hours_wrapper');
const minute = document.querySelector('.minute_stick');
const second = document.querySelector('.second_stick');

let n = 0

function rotateCircle() {
  const now = new Date();
  const hr = now.getHours();
  const mn = now.getMinutes();
  const sc = now.getSeconds();

  const hrDegree = hr * 30 + mn * 0.5 + sc * 0.0083
  hour.style.transform = `rotate(-${hrDegree}deg)`;
  
  const mnDegree = mn * 6 + sc * 0.1
  minute.style.transform = `rotate(${mnDegree}deg)`;
  
  const scDegree = sc * 6
  second.style.transform = `rotate(${scDegree}deg)`;
}

setInterval(rotateCircle, 1000)