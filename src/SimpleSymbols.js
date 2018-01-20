/*
* SimpleSymbols Function
* Have the function SimpleSymbols(str) take the str parameter being passed and determine
* if it is an acceptable sequence by either returning the string true or false.
* The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a)
* and for the string to be true each letter must be surrounded by a + symbol.
* So the string to the left would be false. The string will not be empty and will have at least one letter.
*/
function SimpleSymbols(){
  //define test cases
  this.tests = ["+d+=3=+s+", "f++d+", "aaaa",  "+z+z+==+a+", "b", "==a+", "+d===+a+", "+z+z+z+"];
  this.results = [true, false, false, true, false, false, false, true];

  this.getResult = function(args){
    //define variable for condition
    var uslov = true;

    //loop through each char of input
    for(let i=0; i<args.length; i++){
      //check if char is a letter
      if(args[i].match(/[a-z]/i)){
        //check if previous and next char are + sign
        if(args[i-1] == '+' && args[i+1] == '+'){
          //if yes, and uslov with true
          uslov = uslov && true;
        }else{
          //if not, and uslov with false
          uslov = uslov && false;
        }
      }
    }
    
    //don't forget to return your result
    return uslov;
  }
}

//make the function available to other units
module.exports = SimpleSymbols;
