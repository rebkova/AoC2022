const fs = require("fs");
const data = fs.readFileSync("data_day04.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
console.log('dataAsArray:', dataAsArray);
// dataAsArray: [ '2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8' ]

let dataInPairs = [];
for (d = 0; d < dataAsArray.length; d++) {
    dataInPairs.push(dataAsArray[d].split(','));
}
console.log('dataInPairs:', dataInPairs);

let arrOfFullContains = [];
for (i = 0; i < dataAsArray.length; i++) {
    const pairOfElves = dataAsArray[i];
    console.log('pairOfElves:', pairOfElves);
    if (Number(pairOfElves[0]) <= Number(pairOfElves[4]) && Number(pairOfElves[2]) >= Number(pairOfElves[6])) {
        // console.log('pairOfElves[0]:', pairOfElves[0]);
        console.log('first if');
        arrOfFullContains.push(1);
        console.log('arrOfFullContains first:', arrOfFullContains);
    } else if (Number(pairOfElves[4]) <= Number(pairOfElves[0]) && Number(pairOfElves[6]) >= Number(pairOfElves[2])) {
        console.log('second if');
        arrOfFullContains.push(1);
        console.log('arrOfFullContains second:', arrOfFullContains);
    }
    console.log('arrOfFullContains at the end of for loop:', arrOfFullContains);
}
console.log('arrOfFullContains:', arrOfFullContains);
const sumOfContains = arrOfFullContains.reduce((a, b) =>  a + b, 0);
console.log('sumOfContains:', sumOfContains);
