/*
* KaprekarsConstant Function
* Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number
* with at least two distinct digits.
* Your program should perform the following routine on the number:
* Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
* and subtract the smaller number from the bigger number.
* Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174.
* Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).
* Your program should return the number of times this routine must be performed until 6174 is reached.
* For example: if num is 3524 your program should return 3 because of the following steps:
* (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
*/
function KaprekarsConstant(){
  //define test cases
  this.tests = [3524, 9813, 1121, 7614, 8774, 5342];
  this.results = [3,7,5,1,4, 3];

  this.recursiveFunc = function(num, index){
    //convert num to string
    var numString = num.toString();

    //check if string has 4 chars, if not append "0" until length=4
    while(numString.length < 4){
      numString = numString + "0";
    }

    //create dec and inc from digits
    var dec = numString.split('').sort().join('');
    var inc = numString.split('').sort((a,b) => b-a).join('');

    //create int variables from dec and inc
    var decInt = parseInt(dec);
    var incInt = parseInt(inc);

    //check if num is already 6174
    if(num!==6174){
      if(decInt > incInt){
        //recursive call
        return this.recursiveFunc(decInt-incInt, index+1);
      }else{
        //recursive call
        return this.recursiveFunc(incInt-decInt, index+1);
      }
    }else{
      //return index if num is finally 6174
      return index;
    }
  }

  this.getResult = function(args){
    //call recursive function to find num of steps till you get 6174
    var result = this.recursiveFunc(args, 0);

    //don't forget to return your result
    return result;
  }
}

//make the function available to other units
module.exports = KaprekarsConstant;
