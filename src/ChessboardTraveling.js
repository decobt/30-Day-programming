/*
* ChessboardTraveling Function
* Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space
* on a standard 8x8 chess board with no pieces on the board along with another space on the chess board.
* The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on
* with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board
* with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are
* of traveling from (x y) on the board to (a b) moving only up and to the right.
* For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways
* to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 
*/
function ChessboardTraveling(){
  //define test cases
  this.tests = ["(1 1)(2 2)","(1 1)(4 4)","(1 1)(4 6)","(2 2)(4 3)"];
  this.results = [2,20,56,3];

  //helper factorial function
  this.getFactorial = function(num){
    //define variable to hold factorial result, initialize with 1
    var fac = 1;

    //loop until num is not 1
    while(num > 1){
      //calculate factorial
      fac = fac * num;
      //decrement num
      num = num - 1;
    }

    //return factorial
    return fac;
  }

  this.getResult = function(args){
    //variable to hold digits string
    var getNum = '';

    //loop through input and separate characters which are digits
    for(let i=0; i<args.length; i++){
      if(args[i].match(/[0-9]/i)){
        getNum = getNum + args[i];
      }
    }

    //create array with digits from the getNum string
    var getLocation = getNum.split('');

    //calculate the y and x spaces
    var xSpaces = parseInt(getLocation[2]) - parseInt(getLocation[0]);
    var ySpaces = parseInt(getLocation[3]) - parseInt(getLocation[1]);

    //calculate the number of ways to pass that distance
    var numOfWays = this.getFactorial(xSpaces + ySpaces) / (this.getFactorial(xSpaces) * this.getFactorial(ySpaces));

    //don't forget to return your result
    return numOfWays;
  }
}

//make the function available to other units
module.exports = ChessboardTraveling;
