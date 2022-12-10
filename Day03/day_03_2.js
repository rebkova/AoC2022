const fs = require("fs");
const data = fs.readFileSync("data_day03.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);

// find a duplicated item in every group of three backpacks 

let duplicatedItems = '';
for (i = 0; i < dataAsArray.length; i+=3) {
  const backpackOne = dataAsArray[i];
  const backpackTwo = dataAsArray[i+1];
  const backpackThree = dataAsArray[i+2];

  let duplicateCandidates = '';
  if (backpackOne.length > backpackTwo.length) {
    for (a = 0; a < backpackOne.length; a++) {
        if (backpackTwo.includes(backpackOne[a])) {
            duplicateCandidates += backpackOne[a];
        }
    }
  } else {
    for (a = 0; a < backpackTwo.length; a++) {
        if (backpackOne.includes(backpackTwo[a])) {
            duplicateCandidates += backpackTwo[a];
        }
    }
  }
  console.log('duplicateCandidates:', duplicateCandidates);

  for (b = 0; b < backpackThree.length; b++) {
    if (duplicateCandidates.includes(backpackThree[b])) {
        duplicatedItems += backpackThree[b];
        break;
    }
  }
  console.log('duplicatedItems:', duplicatedItems); 
}

let arrOfPrios = [];
for (k = 0; k < duplicatedItems.length; k++) {
    const lowCaseCharValue = duplicatedItems.charCodeAt(k) - 96;
    if (lowCaseCharValue > 0) {
        arrOfPrios.push(lowCaseCharValue)
    } else if (lowCaseCharValue < 0) {
        const uppCaseCharValue = duplicatedItems.charCodeAt(k) - 38;
        arrOfPrios.push(uppCaseCharValue)
    }
}
console.log('arrOfPrios:', arrOfPrios);

const sumOfPrios = arrOfPrios.reduce((a, b) => a + b, 0);
console.log('sumOfPrios:', sumOfPrios);

// solution part 2: 7878
                 
// TODO:
// x find char common between first two elves
// x an then find that char in the third one
// x add that char with the prio value to arrOfPrios