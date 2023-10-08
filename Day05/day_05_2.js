const fs = require("fs");
const data = fs.readFileSync("data_day05.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
const instruction = dataAsArray.map(data => data.split(' '));

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
  // RULE CHANGE: lift multiple crates at once & keep their order

  const nrOfCrates = parseInt(instruction[i].at(1), 10);
  const from = parseInt(instruction[i].at(3), 10);
  const to = parseInt(instruction[i].at(5), 10);

  // for every instruction change the crateStack
  let tempArray = []; 
  for (j = nrOfCrates; j > 0; j--) {;

    let crate = crateStack[from-1].pop();
    tempArray.push(crate); // cba
    if (j === 1) {
      // after popping out all of them, reverse the array: cba -> abc
      tempArray.reverse();
      // and push it to destination stack
      crateStack[to-1].push(...tempArray);
    }
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

// solution pt 2: PRTTGRFPB