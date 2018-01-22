/*
* MaximalSquare Function
* Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's,
* and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height,
* and your program should return the area of the largest submatrix that contains only 1's.
* For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:
*
* 1 0 1 0 0
* 1 0 1 1 1
* 1 1 1 1 1
* 1 0 0 1 0
*
* For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2,
* so your program should return the area which is 4. You can assume the input will not be empty.
*/
function MaximalSquare(){
  //define test cases
  this.tests = [["0111", "1111", "1111", "1111"], ["0111", "1101", "0111"], ["01001", "11111", "01011", "11011"], ["101101", "111111", "011111", "111111", "001111", "011111"]];
  this.results = [9,1,4,16];

  this.getResult = function(args){
    //get length of column and row
    var col = args[0].length;
    var row = args.length;

    //create 2D array from the input
    var arr = [];
    for(let i=0; i<args.length; i++){
      arr.push(args[i].split(''));
    }

    //create a new 2D array with dimensions [row+1][col+1]
    var x = new Array(row + 1);
    for(i=0; i < x.length; i++ ){
      x[i] = new Array(col+1);
    }

    //define variable to hold max value
    var max = 0;

    //loop through each row and column
    //populate x with values
    //calculate max
    for(i=0; i<= row; i++){
      //loop through each column
      for(let j=0; j<= col; j++){
        //if column or row equals 0, or original array value equals 0
        if(i===0 || j===0 || arr[i-1][j-1]==0){
          //set value on that place to be 0
          x[i][j] = 0;
        }else{
          //else calculate value based on other values
          res = Math.min(x[i-1][j], x[i-1][j-1], x[i][j-1]) + parseInt(arr[i-1][j-1]);
          //set value
          x[i][j] = res;
          //check for max
          if(res > max){
            max = res;
          }
        }
      }
    }

    //don't forget to return your result
    //max*max will be the number of squares in the submatrix that have 1
    return max*max;
  }
}

//make the function available to other units
module.exports = MaximalSquare;
