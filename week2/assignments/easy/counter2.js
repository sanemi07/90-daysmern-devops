let count = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function counter() {
  while (count < 100) {
    console.log(count++);
    await sleep(1000);
  }
}

counter();
