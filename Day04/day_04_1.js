const fs = require("fs");
const data = fs.readFileSync("data_day04.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
// dataAsArray: [ '2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8' ]

let dataInPairs = [];
for (d = 0; d < dataAsArray.length; d++) {
    // split at non-digits only
    dataInPairs.push(dataAsArray[d].split(/\D/));
}

let arrOfFullContains = [];
for (i = 0; i < dataInPairs.length; i++) {
    const pairOfElves = dataInPairs[i];

    if (Number(pairOfElves[0]) <= Number(pairOfElves[2]) && Number(pairOfElves[1]) >= Number(pairOfElves[3])) {
        arrOfFullContains.push(1);
    } else if (Number(pairOfElves[2]) <= Number(pairOfElves[0]) && Number(pairOfElves[3]) >= Number(pairOfElves[1])) {
        arrOfFullContains.push(1);
    }
}

const sumOfContains = arrOfFullContains.reduce((a, b) =>  a + b, 0);
console.log('sumOfContains:', sumOfContains);
// solution part 1: 644
