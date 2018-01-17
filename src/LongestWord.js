/*
* LongestWord Function
* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
* If there are two or more words that are the same length, return the first word from the string with that length.
* Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(){
  this.tests = ['fun&!! time', 'I love dogs',3,4];
  this.results = ['time', 'love',3,4];

  this.getResult = function(args){
    //add your code here

    //define needed variables
    let pom='', words = [];
    let longest, dolz = 0;

    //get all words, separate letters from punctuation
    for(let i=0; i <= args.length; i++){
      if(i===args.length && pom!=''){
        words.push(pom);
      }else{
        if(args[i].match(/[A-Za-z]/i)){
          pom = pom + args[i];
        }else{
          if(pom!=''){
            words.push(pom);
          }
          pom = '';
        }
      }
    }

    //find the longest words
    for(i=0; i < words.length; i++){
      if(dolz < words[i].length){
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
