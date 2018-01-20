/*
* LetterCapitalize Function
* Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
* Words will be separated by only one space. 
*/
function LetterCapitalize(){
  //define test cases
  this.tests = ["h3llo yo people", "yooooooo hi", "a b c d e f", "i love coding", "thisiscool"];
  this.results = ["H3llo Yo People", "Yooooooo Hi", "A B C D E F", "I Love Coding", "Thisiscool"];

  this.getResult = function(args){
    //split input string into words
    var words = args.split(" ");

    //define variable for the output
    var output='';

    //loop through each word in the array
    for(let i=0; i<words.length; i++){
      //append the word to the output string, capitalize first letter, add rest of word chars
      output = output + words[i].charAt(0).toUpperCase() + words[i].slice(1);

      //check if not last word, otherwise append empty space
      if(i != words.length - 1){
        output = output + " ";
      }
    }

    //don't forget to return your result
    return output;
  }
}

//make the function available to other units
module.exports = LetterCapitalize;
