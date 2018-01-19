/*
* FirstReverse Function
* Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
* For example: if the input string is "Hello World and Coders"
* then your program should return the string sredoC dna dlroW olleH.
*/
function FirstReverse(){
  //define test cases
  this.tests = ["Hello World and Coders", "Trajche", "I Love Code","coderbyte",""];
  this.results = ["sredoC dna dlroW olleH", "ehcjarT","edoC evoL I","etybredoc",""];

  this.getResult = function(args){
    //define variable to hold the result
    var reverse = '';

    //loop through input string and traverse from the end
    for(let i=args.length; i > 0; i--){
      reverse = reverse + args[i-1];
    }

    //don't forget to return your result
    return reverse;
  }
}

//make the function available to other units
module.exports = FirstReverse;
