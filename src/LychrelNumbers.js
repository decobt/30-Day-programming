/*
* LychrelNumbers Function
* The Lychrel number algorithm is defined as follows: Starting with a positive integer perform the iterative process
* of summing a number with its reversed number until you get to a palindrome number (identical to its reversed number).
* Lychrel numbers are defined as numbers, that no matter how often you iterate this process never form a palindrome.
* Finding a Lychrel number is an unsolved problem.
* How many of all positive integers n < 100000 don't turn to a palindrome within the first 100 iteration steps?
*/
function LychrelNumbers(){
  this.tests = [1,2,3,4];
  this.results = [1,2,3,4];
  this.getResult = function(args){
    //add your code here

    //don't forget to return your result
    return args;
  }
}

//make the function available to other units
module.exports = LychrelNumbers;
