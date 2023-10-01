const fs = require("fs");
const data = fs.readFileSync("data_day05.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
const instruction = dataAsArray.map(data => data.split(' '));
// console.log('instruction:', instruction);

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

// console.log('crateStack:', crateStack);


// loop through all instructions
for (i = 0; i <= instruction.length-1; i++) {
  const xTimes = parseInt(instruction[i].at(1), 10);
  // console.log('---- new instruction -----')
  // console.log('xTimes:', xTimes);
  const from = parseInt(instruction[i].at(3), 10);
  // console.log('from:', from, typeof(from));
  const to = parseInt(instruction[i].at(5), 10);
  // console.log('to:', to, typeof(to));
  // console.log('i', i);
  // for every instruction change the crateStack
  for (j = xTimes; j > 0; j--) {
    // console.log('j:', j);
    // console.log('crateStack before pop', crateStack);
    let crate = crateStack[from-1].pop();
    // console.log('crate:', crate)
    crateStack[to-1].push(crate);
    // console.log('crateStack after push', crateStack);
  }
}
const finalCrateStack = [...crateStack];
console.log('final crateStack:', finalCrateStack);

// return crateStack;

let concatedCrates = '';
let lastCrate = '';
// concat the last crates of every stack
for (i = 0; i <= crateStack.length-1; i++) {
  console.log('crateStack[i]:', crateStack[i]);
  lastCrate = crateStack[i].pop();
  console.log('lastCrate:', typeof(lastCrate));
  concatedCrates.concat(lastCrate);
  console.log('concatCrates:', concatCrates);
}

// Q: why is concatCrates undefined?

// solution pt 1: ZRLJGSCTR