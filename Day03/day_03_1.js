const fs = require("fs");
const data = fs.readFileSync("data_day03.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);

// every row = 1 backpack
// every 1/2 row = 1 compartment
// one item appears in both compartments (OBS! differ between uppper- and lowercase)

// item priority: 
// lowercase a-z: 1-26
// uppercase A-Z: 27-52
// Q: create a map/object with key - value pairs? _> nopes, look up the dec values in an ASCII table and recalculate accordingly

let duplicatedItems = '';
for (i = 0; i < dataAsArray.length; i++) {
  const backpackSize = dataAsArray[i].length;
  
  let comptOne = dataAsArray[i].slice(0, backpackSize/2);
  let comptTwo = dataAsArray[i].slice(backpackSize/2, backpackSize)
  
  // compare items in comptOne to comptTwo _> add the duplicated item to a string
  for (j = 0; j < comptOne.length; j++) {
    if (comptTwo.includes(comptOne[j])) {
      duplicatedItems += comptOne[j];
      break;
    }
  }
}
// console.log('duplicatedItems all:', duplicatedItems); 

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
// console.log('arrOfPrios:', arrOfPrios);

const sumOfPrios = arrOfPrios.reduce((a, b) => a + b, 0);
console.log('sumOfPrios:', sumOfPrios);
// solution part 1: 7878



/** 
 * TODO:
// x convert data to an array of strings
// x take every string and halve it
// x compare the halves and find the first duplicate char
// x push the char to a string
// x calculate value of every letter with .charCodeAt()
// x sum arr of values
*/