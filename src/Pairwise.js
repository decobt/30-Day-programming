/*
* Pairwise Function
* Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
* If multiple pairs are possible that have the same numeric elements but different indices,
* return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
* For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
* We'll take their corresponding indices and add them, the result will be 0+3=3 and 1+2=3, result is 6.
*/
function Pairwise(){
  //define test cases
  this.tests = [
    [[1,4,2,3,0,5],7],
    [[1, 3, 2, 4], 4],
    [[0, 0, 0, 0, 1, 1], 1],
    [[], 100],
    [[1, 1, 1], 2]
  ];
  this.results = [11,1,10,0,1];
  this.getResult = function(args){
    //define variables
    var sum = 0;
    var num = args[0], res = args[1], indices = [];

    //loop through num array
    for(let i=0; i<num.length; i++){
      for(let j=i+1; j<num.length; j++){
        //check if two numbers equal res, which makes them pair
        if(num[i]+num[j]===res){
          //check if they have not yet passed
          if(!(indices.includes(i) || indices.includes(j))){
            //if not, add them to indices array
            indices.push(i);
            indices.push(j);
          }
        }
      }
    }

    //calculate the sum of the indices
    for(let i=0; i<indices.length; i++){
      sum = sum + indices[i];
    }

    //don't forget to return your result
    return sum;
  }
}

//make the function available to other units
module.exports = Pairwise;
