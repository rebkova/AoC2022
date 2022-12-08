const fs = require("fs");

fs.readFile("data_day01.txt", (err, data) => {
  if (err) throw err;
  // array with (empty) strings
  const dataAsArray = data.toString().split(/\r?\n/);
  // console.log(dataAsArray);
  
  let arrOfSums = [];
  let sumOfCals = 0;
  for (let i = 0; i < dataAsArray.length; i++) {
    if (dataAsArray[i] !== '') {
      // sum for each Elf
      sumOfCals += Number(dataAsArray[i]); 
    } else {
      // push the sum for each Elf to an arr
      arrOfSums.push(sumOfCals);
      sumOfCals = 0;
    }
  }
  // push a 0 representing an 'empty row'
  arrOfSums.push(sumOfCals);

  // max amount of cals one Elf carries
  console.log('max first:', Math.max(...arrOfSums)); 
  // solution part 1: 67027
  
  const sortedSums = arrOfSums.sort();
  console.log('sortedSums:', sortedSums);
  console.log('sortedSums.lenght:', sortedSums.length);  // length: 247
  
  // solution part 2 - top 3 cal rich Elves:
  // 67027 / 65333 / 64931 _> 197291
  console.log('max 3', sortedSums[243]);
  console.log('max 2', sortedSums[244]);
  console.log('max 1', sortedSums[245]);
  // Q: why is console.log(sortedSums[246]); [8651]????
});