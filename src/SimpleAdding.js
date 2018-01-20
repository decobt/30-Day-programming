/*
* SimpleAdding Function
* Have the function SimpleAdding(num) add up all the numbers from 1 to num.
* For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
* For the test cases, the parameter num will be any number from 1 to 1000.
*/
function SimpleAdding(){
  //define test cases
  this.tests = [45,10,999,123,5];
  this.results = [1035,55,499500,7626,15];

  this.getResult = function(args){
    var sum = 0;

    //loop through 1 to args
    for(let i=1; i<=args; i++){
      //calculate the sum
      sum = sum + i;
    }

    //don't forget to return your result
    return sum;
  }
}

//make the function available to other units
module.exports = SimpleAdding;
