/*
* FirstFactorial Function
* Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed
* and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
* For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/
function FirstFactorial(){
  //define test cases
  this.tests = [2,4,10,8,5,1];
  this.results = [2, 24, 3628800, 40320, 120,1];
  
  this.getResult = function(args){
    //create a variable to store the result
    var fak = 1;
    //loop each time decrementing the input
    for(let i=args; i>0; i--){
      //calculate the factorial
      fak = fak * i;
    }
    //don't forget to return your result
    return fak;
  }
}

//make the function available to other units
module.exports = FirstFactorial;
