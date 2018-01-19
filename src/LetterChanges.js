/*
* LetterChanges Function
* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
* Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
* Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/
function LetterChanges(){
  //define test cases
  this.tests = ["hello*3", "fun times!", "z1a", "argument goes here"];
  this.results = ["Ifmmp*3", "gvO Ujnft!", "A1b", "bshvnfOU hpft Ifsf"];

  this.getResult = function(args){
    //define variable to hold the result
    var pom = '';

    //loop through each char from input string
    for(let i=0; i< args.length; i++){
      //match char if letter
      if(args[i].match(/[a-z]/i)){
        //check if charCode is 122 (letter z)
        if(args.charCodeAt(i)==122){
          //if yes, switch it with letter a
          pom = pom + String.fromCharCode(97);
        }else{
          //otherwise switch it with next letter in alphabet, or charcode + 1
          pom = pom + String.fromCharCode( args.charCodeAt(i) + 1);
        }
      }else{
        //if char is not letter, just append to result string
        pom = pom + args[i];
      }
    }

    //define variable for final result
    var result = '';

    //loop through each char in pom
    for(let i=0; i< pom.length; i++){
      //check if char is vowel
      if(pom[i].match(/[aeiou]/i)){
        //if yes, switch with uppercase counterpart
        result = result + pom[i].toUpperCase();
      }else{
        //if not, just append to the result
        result = result + pom[i];
      }
    }

    //don't forget to return your result
    return result;
  }
}

//make the function available to other units
module.exports = LetterChanges;
