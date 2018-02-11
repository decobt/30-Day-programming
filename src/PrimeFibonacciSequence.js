/*
* PrimeFibonacciSequence Function
* n the fibonacci sequence every number is the sum of the two preceding ones:
* 1,1,2,3,5,8,13,21,34...
* The sequence Fn of fibonacci numbers is defined as: Fn=Fn−1+Fn−2
* Question
* Find the sum of all the prime values in the fibonacci sequence, where
* Fn < n
*/
function PrimeFibonacciSequence(){
  //define test cases
  this.tests = [1000,100,5000,4];
  this.results = [345,112,1942,5];

  //function used to test if number is a prime
  this.test_prime = function (n){
    if (n===1){
      return false;
    }
    else if(n === 2)
    {
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;
    }
  }
  this.getResult = function(args){
    //define some variables
    var fib = [1], Fn = 1, sum = 0;

    //add all fib numbers to the array
    while(Fn < args){
      fib.push(Fn);
      Fn = fib[fib.length-1] + fib[fib.length-2];
    }

    //test which fib numbers are primes, calculate sum
    for(let i=0; i<fib.length; i++){
      if(this.test_prime(fib[i])){
        sum = sum + fib[i];
      }
    }

    //don't forget to return your result
    return sum;
  }
}

//make the function available to other units
module.exports = PrimeFibonacciSequence;
