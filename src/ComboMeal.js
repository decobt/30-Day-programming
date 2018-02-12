/*
* ComboMeal Function
* A fast-food chain menu is selling a burger, a can of soda, and a combo meal containing a burger and a can of soda,
* at prices known to you. They have chosen the selling price for each item by first determining the total cost
* of making the individual items and then adding a fixed value to it, representing their profit. Assume that the cost
* of making a regular burger is fixed and the cost of making a regular soda is fixed.
* Given the price of a burger, a can of soda and a combo meal on the menu, your task is to compute the fixed profit.
* Selling price = making price + fixed profit. Thus combo price = making price of burget + soda + fixed profit.
* Selling price of burget = making price + fixed profit. Selling price of soda = making price + fixed profit.
*/
function ComboMeal(){
  //define test cases
  this.tests = [[275, 214, 420], [6, 9, 11], [199, 199, 255]];
  this.results = [69,4,143];
  this.getResult = function(args){
    //define and set variables
    var burger = args[0], soda = args[1], combo = args[2];

    var fix_profit = soda + burger - combo;

    //calculate individual making price
    let making_burger = burger - fix_profit;
    let making_soda = soda - fix_profit;

    //calculate making of combo meal
    let making_combo = combo - fix_profit;

    //check if making combo meal equals making of burger + soda
    if( making_combo = making_burger + making_soda){
      //console.log(true);
    }
    //don't forget to return your result
    return fix_profit;
  }
}

//make the function available to other units
module.exports = ComboMeal;
