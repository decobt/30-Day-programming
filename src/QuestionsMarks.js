/*
* QuestionsMarks Function
* Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters,
* and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10.
* If so, then your program should return the string true, otherwise it should return the string false.
* If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
* For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly
* 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/
function QuestionsMarks(){
  //define test cases
  this.tests = [
    "arrb6???4xxbl5???eee5",
    "aa6?9",
    "acc?7??sss?3rr1??????5",
    "aaaaaaarrrrr??????",
    "9???1???9???1???9",
    "5??aaaaaaaaaaaaaaaaaaa?5?a??5",
    "9???1???9??1???9",
    "4?5?4?aamm9",
    "acc?7??sss?3rr1??????5"
  ];
  this.results = [true, false, true, false, true, true, false, false, true];

  this.getResult = function(args){
    //add your code here
    var prv='', arr=[], condition = false;

    //loop through input array to get only numbers and question marks
    for(let i=0; i<args.length; i++){
      if(args[i].match(/[0-9]/i) || args[i]==='?'){
        prv = prv + args[i];
      }
    }

    //define pom t hold question marks
    var pom = '';
    
    //loop through prv variable and separate numbers from ?
    for(let i=0; i<prv.length; i++){
      if(prv[i].match(/[0-9]/i)){
        arr.push(prv[i]);
      }else{
        if(arr.length === 1){
          //start calculating pom once arr has at least 1 element
          pom = pom + prv[i];
        }
      }

      //if arr has 2 elements
      if(arr.length == 2){
        //check if their sum equals 10
        if(parseInt(arr[0]) + parseInt(arr[1]) ===10){
          //check if string between them contains ???
          if(pom.indexOf('???') !== -1){
            condition = !(condition && false);
          }else{
            //if not, the condition is not met, break for
            condition = false;
            break;
          }
        }
        //remove the first item in array, reset pom
        arr.shift();
        pom = '';
      }
    }

    //don't forget to return your result
    return condition;
  }
}

//make the function available to other units
module.exports = QuestionsMarks;
