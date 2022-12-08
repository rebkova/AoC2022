const fs = require("fs");

fs.readFile("data_day02.txt", (err, data) => {
  if (err) throw err;
  // array with (empty) strings
  let dataAsArray = data.toString().split(/\r?\n/);

  // opponent:
  // A = rock 
  // B = paper
  // C = scissors
  
  // me (assumption):
  // X = rock
  // Y = paper
  // Z = scissors
  
  // total score:
  // shape + outcome (0 - lose, 3 - draw, 6 - win)
  // 1 - rock
  // 2 - paper
  // 3 - scissors
  let arrOfScores = [];
  for (i = 0; i < dataAsArray.length; i++) {
    const opponent = dataAsArray[i].charAt(0);
    const myResponse = dataAsArray[i].charAt(2);
    
    console.log('dataAsArray[i]', dataAsArray[i]);
    // lose cases
    if (opponent === 'A' && myResponse === 'Z') {
      arrOfScores.push(0+3);
    } else if (opponent === 'B' && myResponse === 'X') {
      arrOfScores.push(0+1);
    } else if (opponent === 'C' && myResponse === 'Y') {
      arrOfScores.push(0+2);
    }

    // draw cases
    if (opponent === 'A' && myResponse === 'X') {
      arrOfScores.push(3+1);
    } else if (opponent === 'B' && myResponse === 'Y') {
      arrOfScores.push(3+2);
    } else if (opponent === 'C' && myResponse === 'Z') {
      arrOfScores.push(3+3);
    }

    // win cases
    if (opponent === 'A' && myResponse === 'Y') {
      arrOfScores.push(6+2);
    } else if (opponent === 'B' && myResponse === 'Z') {
      arrOfScores.push(6+3);
    } else if (opponent === 'C' && myResponse === 'X') {
      arrOfScores.push(6+1);
    }
    console.log('arrOfScores:', arrOfScores);
  }

  let sumOfScores = 0;
  for (i = 0; i < arrOfScores.length; i++) {
    sumOfScores += arrOfScores[i];
  }

  console.log('sumOfScores:', sumOfScores);
  // solution part 1: 14163
});