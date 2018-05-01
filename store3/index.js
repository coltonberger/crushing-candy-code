var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  return store3[1]['inventory sold']['Berry Bites']
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  return store3[3]['inventory sold']['Mint Wafers']['quantity'];
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  return store3.length
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3.
//Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  let saleDates = [];
  for (let i = 0; i < store3.length; i++){
    saleDates.push(store3[i]['date'])
  }

  return saleDates;
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  let obj = {};
  let price = [];
  let candies = Object.keys(store3[4]['inventory sold'])

  let inventory = store3[4]['inventory sold'];
  for (let key in inventory){
    price.push(inventory[key]['cost']);
  }

  for (let i = 0; i < candies.length; i++){
    obj[candies[i]] = price[i];
  }


  return obj;
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  let total = 0;

  for (let i = 0; i < store3.length; i++){
    total += store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
  }

  return total;
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  revenue = 0;
  let janNine = store3[3]['inventory sold'];

  for (let key in janNine){
    let cost = janNine[key]['cost'];
    let quantity = janNine[key]['quantity'];
    let total = cost * quantity;
    revenue += total+ revenue;
  }

  return revenue.toFixed(2);
}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
