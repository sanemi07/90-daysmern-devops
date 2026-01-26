function clock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let time
  

  console.log(`The time is ${hours}:${minutes}:${seconds}`);
}

const time=setInterval(clock, 1000);
console.log(time)
