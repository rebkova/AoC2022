const fs = require("fs");

fs.readFile("data_day03.txt", (err, data) => {
  if (err) throw err;
  
  console.log('data:', data);
  let dataAsArray = data.toString().split(/\r?\n/);
  // console.log('dataAsArray:', dataAsArray);
  // every row = 1 backpack
  // every 1/2 row = 1 compartment
  // one item appears in both compartments (OBS! differ between uppper- and lowercase)

  // item priority: 
  // lowercase a-z: 1-26
  // uppercase A-Z: 27-52
  // Q: create a map/object with key - value pairs?

  // TODO:
  // x convert data to array of strings
  // x take every sting and halve it

  for (i = 0; i < dataAsArray.length; i++) {
    console.log('backpack:', dataAsArray[i]);
    const backpackSize = dataAsArray[i].length;

    let comptOne = dataAsArray[i].slice(0, backpackSize/2);
    console.log('comptOne:', comptOne);
    let comptTwo = dataAsArray[i].slice(backpackSize/2, backpackSize)
    console.log('comptTwo:', comptTwo);

    // compare items in comptOne to comptTwo _> push the duplicated item to arr 
    for (j = 0; j < comptOne.length; j++) {

    }

    // console.log('comtTwo incudes T:', comptTwo.includes('T'));
  }
  
  // compare the halves and find the duplicate char
  // .includes() ? 
  
  // rate the duplicate
  // sum the priority ratings
  
});