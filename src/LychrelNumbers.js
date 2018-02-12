/*
* LychrelNumbers Function
* The Lychrel number algorithm is defined as follows: Starting with a positive integer perform the iterative process
* of summing a number with its reversed number until you get to a palindrome number (identical to its reversed number).
* Lychrel numbers are defined as numbers, that no matter how often you iterate this process never form a palindrome.
* Finding a Lychrel number is an unsolved problem.
* How many of all positive integers n < 100000 don't turn to a palindrome within the first 100 iteration steps?
*/
function LychrelNumbers(){
  this.tests = [100,500,1000,5000];
  this.results = [81,441,891,4851];
  this.check = function (n, itr){
    //convert number to string
    n = n.toString();
    //calculate reverse
    var rev = n.split('').reverse().join('');

    //check if not 100 iteration steps
    if(itr>100){
      return false;
    }else if(n === rev){
      //if palindrome, return true
      return true;
    }else{
      //check for another step with the sum of the 2 numbers
      this.check(parseInt(n)+parseInt(rev), itr+1);
    }
  }
  this.getResult = function(args){
    //define variable to count numbers
    var count = 0;

    //go from 1 to args and check if number dont turns in palindrom within 100 steps
    for(let i=1; i < args; i++){
      if(!this.check(i, 1)){
        //if not palindrome, increase count
        count = count + 1;
      }
    }
    
    //don't forget to return your result
    return count;
  }
}

//make the function available to other units
module.exports = LychrelNumbers;
