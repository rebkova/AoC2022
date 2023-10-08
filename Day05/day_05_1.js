const fs = require("fs");
const data = fs.readFileSync("data_day05.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
const instruction = dataAsArray.map(data => data.split(' '));

// TEST
// let crateStack = [
// ['Z', 'N'],
// ['M', 'C', 'D'],
// ['P']
// ];
const crateStack = [
  ['S', 'T', 'H', 'F', 'W', 'R'],
  ['S', 'G', 'D', 'Q', 'W'],
  ['B', 'T', 'W'],
  ['D', 'R', 'W', 'T', 'N', 'Q', 'Z', 'J'],
  ['F', 'B', 'H', 'G', 'L', 'V', 'T', 'Z'],
  ['L', 'P', 'T', 'C', 'V', 'B', 'S', 'G'],
  ['Z', 'B', 'R', 'T', 'W', 'G', 'P'],
  ['N', 'G', 'M', 'T', 'C', 'J', 'R'],
  ['L', 'G', 'B', 'V']
];

// loop through all instructions
for (i = 0; i <= instruction.length-1; i++) {
  const xTimes = parseInt(instruction[i].at(1), 10);
  const from = parseInt(instruction[i].at(3), 10);
  const to = parseInt(instruction[i].at(5), 10);

  // for every instruction change the crateStack
  for (j = xTimes; j > 0; j--) {;
    let crate = crateStack[from-1].pop();
    crateStack[to-1].push(crate);
  }
}
const finalCrateStack = [...crateStack];
console.log('final crateStack:', finalCrateStack);

let concatedCrates = [];
let lastCrate = '';
// concat the last crates of every stack
for (i = 0; i <= crateStack.length-1; i++) {
  lastCrate = crateStack[i].pop();
  concatedCrates.push(lastCrate);
}
console.log('concatedCrates:', concatedCrates.join(''));

// solution pt 1: ZRLJGSCTR