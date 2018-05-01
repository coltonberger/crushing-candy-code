var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  let bananaSaleDate = [];
  for(let i = 0; i < store2['sale dates']['Banana Bunches'].length; i++) {
    bananaSaleDate.push(store2['sale dates']['Banana Bunches'][i]);
  }
  return bananaSaleDate;
}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let mintWaferPrices = store2['inventory prices']['Mint Wafers'];
  mintWaferPrices = 1.99;
  return false;
  //No, it does not update because the variable points back to the original object
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let caramels = store2['sale dates']['Caramel Twists'];
  store2['sale dates']['Caramel Twists'].pop();
  return true;
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let saleOnDate = {};

  for (let i = 0; i < store2['sale dates']['Caramel Twists'].length; i++) {
    let carmelDate = store2['sale dates']['Caramel Twists'][i];
    if (saleOnDate[carmelDate] === undefined){
      saleOnDate[carmelDate] = 1;
    } else {
      saleOnDate[carmelDate]++;
    }
  }

  return saleOnDate;
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  let saleOnDate = loopingData1();
  let maxSales = 0;
  let dayWithMostSale;

  for (let key in saleOnDate) {
    let totalSale = saleOnDate[key];
    if (totalSale > maxSales) {
      maxSales = totalSale;
      dayWithMostSale = key;
    }
  }

  return dayWithMostSale
}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {
  let obj = {};

  for (let key in store2['sale dates']){
    let amountSold = store2['sale dates'][key].length;
    let price = store2['inventory prices'][key];
    let total = amountSold * price
    obj[key] = total.toFixed(2);
  }

  return obj;
}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
