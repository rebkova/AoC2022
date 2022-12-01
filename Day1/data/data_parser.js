const fs = require("fs");

fs.readFile("data_day1.txt", (err, data) => {
  if (err) throw err;
  // array with (empty) strings
  const dataAsArray = data.toString().split(/\r?\n/);
  // console.log(dataAsArray);
  // vzami vsak string na naslednjem indexu (ce naslednji index ni ''), pretvori v number in sestej
  let arrOfSums = [];
  let sumOfCals = 0;
  for (let i = 0; i < dataAsArray.length; i++) {
    if (dataAsArray[i] !== '') {
      // turn the element into number and add it to the next element
      sumOfCals += Number(dataAsArray[i]); 
    } else {
      arrOfSums.push(sumOfCals);
      sumOfCals = 0;
    }
  }
  arrOfSums.push(sumOfCals);

  console.log('arrOfSums length:', arrOfSums.length);
  // console.log('max:', Math.max(...arrOfSums)); 

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  // const popppedArrOfSums1 = arrOfSums.slice(0, -1);
  // console.log(popppedArrOfSums1.length);
  // console.log('max w m1:', Math.max(...popppedArrOfSums1)); 
  
  // const popppedArrOfSums2 = popppedArrOfSums1.slice(0, -1);
  // console.log(popppedArrOfSums2.length);
  // console.log('max w m2:', Math.max(...popppedArrOfSums2)); 
  // max values:
  // 67027
  // 67027
  // 67027 / 65333 / 64931
  // const unique = arrOfSums.filter(onlyUnique);
  // console.log('unique:', unique);

  // console.log('unique length:', unique.length);
  // console.log('max:', Math.max(...unique)); 

  // const uniqueSorted = unique.sort();

  // const popppedArrOfSums1 = uniqueSorted.slice(0, -1);
  // console.log('popppedArrOfSums1.length:', popppedArrOfSums1.length);
  // console.log('max w m1:', Math.max(...popppedArrOfSums1)); 
  
  // const popppedArrOfSums2 = popppedArrOfSums1.slice(0, -1);
  // console.log(popppedArrOfSums2.length);
  // console.log('max w m2:', Math.max(...popppedArrOfSums2)); 

  const sortedSums = arrOfSums.sort();
  console.log('sortedSums.length:', sortedSums.length);
  const popppedArrOfSums1 = sortedSums.slice(0, -3);
  console.log('popppedArrOfSums1.length:', popppedArrOfSums1.length);
  console.log('max w m1:', Math.max(...popppedArrOfSums1)); 

  // console.log(arrOfSums.sort()[244]);
  // console.log(arrOfSums.sort()[245]);
  // console.log(arrOfSums.sort()[246]);
  // console.log(sortedSums[244]);
  // console.log(sortedSums[245]);
  // console.log(sortedSums[246]);
  // console.log('sum last 3:', sortedSums[sortedSums.length-1] + sortedSums[sortedSums.length-2] + sortedSums[sortedSums.length-3]);
});