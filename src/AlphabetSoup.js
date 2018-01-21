/*
* AlphabetSoup Function
* Have the function AlphabetSoup(str) take the str string parameter being passed
* and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
* Assume numbers and punctuation symbols will not be included in the string.
*/
function AlphabetSoup(){
  //define test cases
  this.tests = ["hello", "coderbyte", "hooplah", "defbca", "letter"];
  this.results = ["ehllo", "bcdeeorty", "ahhloop", "abcdef", "eelrtt"];

  this.getResult = function(args){
    //create array with chars as elements
    var arr = args.split('');

    //don't forget to return your result
    //first sort array, then join elements
    return arr.sort().join('');
  }
}

//make the function available to other units
module.exports = AlphabetSoup;
