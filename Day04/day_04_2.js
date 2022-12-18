const fs = require("fs");
const data = fs.readFileSync("data_day04.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
// dataAsArray: [ '2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8' ]

let dataInPairs = [];
for (d = 0; d < dataAsArray.length; d++) {
    // split at non-digits only
    dataInPairs.push(dataAsArray[d].split(/\D/));
}

let arrOfOverlaps = [];
for (i = 0; i < dataInPairs.length; i++) {
    const pairOfElves = dataInPairs[i];
        // '2-8,3-7'
    if (Number(pairOfElves[0]) <= Number(pairOfElves[2]) && Number(pairOfElves[1]) >= Number(pairOfElves[3])) {
        arrOfOverlaps.push(1);
        // '6-6,4-6'
    } else if (Number(pairOfElves[2]) <= Number(pairOfElves[0]) && Number(pairOfElves[3]) >= Number(pairOfElves[1])) {
        arrOfOverlaps.push(1);
        // '2-6,4-8', '5-7,7-9'
    } else if (Number(pairOfElves[0]) <= Number(pairOfElves[3]) && Number(pairOfElves[1]) >= Number(pairOfElves[2])) {
        arrOfOverlaps.push(1);
    }
}

const sumOfOverlaps = arrOfOverlaps.reduce((a, b) =>  a + b, 0);
console.log('sumOfOverlaps:', sumOfOverlaps);
// solution part 2: 926

// TODO:
// x keep the code for fully contained
// x add looser rules for overlaps
// x the sum of overlaps should be > sum of fully contained