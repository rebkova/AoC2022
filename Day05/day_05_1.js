const fs = require("fs");
const data = fs.readFileSync("data_day05.txt", 'utf8');

let dataAsArray = data.toString().split(/\r?\n/);
console.log('dataAsArray:', dataAsArray);