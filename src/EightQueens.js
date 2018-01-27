/*
* EightQueens Function
* Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens
* on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following:
* ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard
* (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right).
* Your program should determine if all of the queens are placed in such a way where none of them are attacking each other.
* If this is true for the given input, return the string true otherwise return the first queen in the list that is
* attacking another piece in the same format it was provided.
*/
function EightQueens(){
  //define test cases
  this.tests = [
    [[2,1], [4,2], [6,3], [8,4], [3,5], [1,6], [7,7], [5,8]],
    [[2,1], [4,3], [6,3], [8,4], [3,4], [1,6], [7,7], [5,8]],
    [[2,1], [5,3], [6,3], [8,4], [3,4], [1,8], [7,7], [5,8]],
    [[5,1], [3,2], [1,3], [6,4], [2,5], [8,6], [6,7], [4,8]]
  ];
  this.results = ["true","2,1","5,3","6,4"];
  this.getResult = function(args){
    //define helper variable
    var j;
    //loop through and check queens in the input
    for(i=0; i< args.length-1; i++){
      //start from next element
      j = i+1;
      //while not end of array
      while(j < 8){
        //check if any any element has the same row or column
        if(args[i][0] == args[j][0] || args[i][1] == args[j][1]){
          //return the first queen if true
          return args[i][0] + ',' + args[i][1];
        }
        //check if queens attack diagonally, the diff between coordinates is equal
        if(Math.abs(args[i][0]-args[j][0]) == Math.abs(args[i][1]-args[j][1])){
          //return the first queen if this is true
          return args[i][0] + ',' + args[i][1];
        }
        //increment j
        j++;
      }
    }

    //don't forget to return your result if nothing else
    return "true";
  }
}

//make the function available to other units
module.exports = EightQueens;
