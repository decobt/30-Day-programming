/*
* CheckNums Function
* Have the function CheckNums(num1,num2) take both parameters being passed
* and return true if num2 is greater than num1, otherwise return false.
* If the parameter values are equal to each other then return -1.
*/
function CheckNums(){
  //define test cases
  this.tests = [[67,67], [122,12], [45,154], [5,5], [9112, 345], [101, 2110]];
  this.results = [-1, false, true, -1, false, true];

  this.getResult = function(args){
    //define variables for num1 and num2
    var num1 = args[0],num2 = args[1];

    //check conditions and return result
    if(num1 < num2){
      return true;
    }else if(num1 > num2){
      return false;
    }else{
      return -1;
    }
  }
}

//make the function available to other units
module.exports = CheckNums;
