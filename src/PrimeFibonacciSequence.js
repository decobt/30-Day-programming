/*
* PrimeFibonacciSequence Function
* n the fibonacci sequence every number is the sum of the two preceding ones:
* 1,1,2,3,5,8,13,21,34...
* The sequence Fn of fibonacci numbers is defined as: Fn=Fn−1+Fn−2
* Question
* Find the sum of all the prime values in the fibonacci sequence, where
* Fn < 1,000,000
*/
function PrimeFibonacciSequence(){
  this.tests = [1,2,3,4];
  this.results = [1,2,3,4];
  this.getResult = function(args){
    //add your code here

    //don't forget to return your result
    return args;
  }
}

//make the function available to other units
module.exports = PrimeFibonacciSequence;
