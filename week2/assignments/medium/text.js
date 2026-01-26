import fs from 'fs/promises';

async function readWrite() {
  try {
    const data = await fs.readFile('sample.txt', 'utf8');

    const cleaned = removeSpace(data);

    await fs.writeFile('sample.txt', cleaned, 'utf8');

    console.log("done");
  } catch (error) {
    console.error(error);
  }
}

function removeSpace(str) {
  let curr = "";
  let prev = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && prev === ' ') {
      continue;
    }
    curr += str[i];
    prev = str[i];
  }

  return curr;
}

readWrite();

// test
console.log(removeSpace("hello   world   from   js"));
