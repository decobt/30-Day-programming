/*
* PentagonalNumber Function
* Have the function PentagonalNumber(num) read num which will be a positive integer
* and determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration.
* For example, in the image below you can see that on the first iteration there is only a single dot,
* on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots.
*/
function PentagonalNumber(){
  //define test cases
  this.tests = [2,5,8,4];
  this.results = [6,51,141,31];

  this.getResult = function(args){
    //define variable to hold number of dots
    var dots = 1;

    //add dots per each iteration
    for(let i=0; i<args; i++){
      dots = dots + 5*i;
    }

    //don't forget to return your result
    return dots;
  }
}

//make the function available to other units
module.exports = PentagonalNumber;
