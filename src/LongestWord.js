/*
* LongestWord Function
* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
* If there are two or more words that are the same length, return the first word from the string with that length.
* Ignore punctuation and assume sen will not be empty. Words may contain numbers.
*/

function LongestWord(){
  //define test cases
  this.tests = ['fun&!! time', 'I love dogs', 'Argument@#goes*&^here*', 'The quick brown fox jumped over the lazy dog','123456789 98765432'];
  this.results = ['time', 'love', 'Argument', 'jumped', '123456789'];

  this.getResult = function(args){
    //define needed variables
    let pom='', words = [], longest, dolz = 0;

    //get all words, separate letters/numbers from punctuation
    //loop through each char in the original input (args)
    //check if char is letter or number, separate words from input string
    //output array with separated words, save it in variable words
    for(let i=0; i < args.length; i++){
      //check if char is letter
      if(args[i].match(/[A-Za-z0-9]/i)){
        //add char to word
        pom = pom + args[i];
      }else{
        //add to array if exists
        words.push(pom);
        //restart pom to empty at the end
        pom = '';
      }
    }

    //if final value of pom is not empty
    if(pom!=''){
      //push final word if it exists
      words.push(pom);
    }

    //find the longest words, loop through words array
    //at the end longest variable will contain the longest word
    //dolz contains the length of the word
    for(i=0; i < words.length; i++){
      //check if length of words[i] is larger than saved dolz
      if(dolz < words[i].length){
        //if it is, we found a new longest word
        longest = words[i];
        dolz = words[i].length;
      }
    }

    //don't forget to return your result
    return longest;
  }
}

//make the function available to other units
module.exports = LongestWord;
