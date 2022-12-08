const fs = require("fs");

fs.readFile("data_day02.txt", (err, data) => {
  if (err) throw err;
  // array with (empty) strings
  let dataAsArray = data.toString().split(/\r?\n/);

  // opponent:
  // A = rock 
  // B = paper
  // C = scissors
  
  // outcome:
  // X = lose
  // Y = draw
  // Z = win
  
  // total score:
  // shape + outcome (0 - lose, 3 - draw, 6 - win)
  // 1 - rock
  // 2 - paper
  // 3 - scissors
  let arrOfScores = [];
  for (i = 0; i < dataAsArray.length; i++) {
    const opponent = dataAsArray[i].charAt(0);
    const outcome = dataAsArray[i].charAt(2);
    
    console.log('dataAsArray[i]', dataAsArray[i]);
    // lose cases
    if (opponent === 'A' && outcome === 'X') {
      arrOfScores.push(0+3);
    } else if (opponent === 'B' && outcome === 'X') {
      arrOfScores.push(0+1);
    } else if (opponent === 'C' && outcome === 'X') {
      arrOfScores.push(0+2);
    }

    // draw cases
    if (opponent === 'A' && outcome === 'Y') {
      arrOfScores.push(3+1);
    } else if (opponent === 'B' && outcome === 'Y') {
      arrOfScores.push(3+2);
    } else if (opponent === 'C' && outcome === 'Y') {
      arrOfScores.push(3+3);
    }

    // win cases
    if (opponent === 'A' && outcome === 'Z') {
      arrOfScores.push(6+2);
    } else if (opponent === 'B' && outcome === 'Z') {
      arrOfScores.push(6+3);
    } else if (opponent === 'C' && outcome === 'Z') {
      arrOfScores.push(6+1);
    }
    console.log('arrOfScores:', arrOfScores);
  }

  let sumOfScores = 0;
  for (i = 0; i < arrOfScores.length; i++) {
    sumOfScores += arrOfScores[i];
  }

  console.log('sumOfScores:', sumOfScores);
  // solution part 2: 12091
});