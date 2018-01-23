/*
* VowelSquare Function
* Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix
* of some arbitrary size filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels
* exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following:
*
* a b c d
* e i k r
* o u f j
*
* Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou.
* If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square,
* so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found.
* If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix.
* The input matrix will at least be of size 2x2.
*/
function VowelSquare(){
  //define test cases
  this.tests = [
    ["abcd", "eikr", "oufj"],
    ["aqrst", "ukaei", "ffooo"],
    ["gg", "ff"],
    ["fghik", "mnors", "tuqae", "ffgei"],
    ["aeeekmoo", "kmnouvoo", "frrsfsto"],
    ["eeei", "ffgi", "kkmo"],
    ["fghik", "mnoos", "tueae", "ffgei"]
  ];
  this.results = ["1-0","1-2","not found","2-3","0-6","not found","1-2"];

  this.getResult = function(args){
    //define row and column variables
    var row = args.length;
    var col = args[0].length;

    //create 2D array from the input
    var arr = [];
    for(let i=0; i<args.length; i++){
      arr.push(args[i].split(''));
    }

    //loop through each row
    for(i=0; i< row; i++){
      //loop through each column
      for(let j=0; j< col; j++){
        //check if char is a vowel
        if(arr[i][j].match(/[aeiou]/i)){
          //if it is, set 1 on that location
          arr[i][j] = 1;
        }else{
          //otherwise, set 0
          arr[i][j] = 0;
        }
      }
    }

    //define output and set default value
    var x = row, y = col, output = 'not found';
    //traverse the array looking for square 2x2 of 1's
    for(i=0; i< row-1; i++){
      //loop through each column
      for(let j=0; j< col-1; j++){
        //check if square has all 1's
        if(arr[i][j]==1 && arr[i+1][j]==1 && arr[i][j+1]==1 && arr[i+1][j+1]==1){
          //if true, set x and y
          if(i < x){ x = i; }
          if(j < y){ y = j; }
        }
      }
    }

    //return result
    if(x === row && y === col){
      return "not found";
    }else{
      return x + '-' + y;
    }
  }
}

//make the function available to other units
module.exports = VowelSquare;
