/*
* MostRecurrent Function
* Given an array of numbers, find the most recurrent number.
* For example, given [1, 2, 3, 4, 3], your algorithm should return 3, as it has the highest level of recurrence.
* For ties, return the first found more recurrent number.
*/
function MostRecurrent(){
  //define test cases
  this.tests = [
      [1,5,2,6,5,2,2,1,6,8,3,2],
      [8,8,9,9,8,7,8,9,5,6,8,3,5,9,8,9,8,9,9,9,8,6],
      [1,2,3,4,5,1,2,3,4,5,1,2,3,1,2,1],
      [2,4,6,8],
      [1,2,3,4,3]
    ];
  this.results = [2,8,1,2,3];

  this.getResult = function(args){
    //define some variables
    var value = 0;
    var recurrence = 0;

    //loop through array
    for(let i=0; i<args.length; i++){
      //set count to zero
      let count = 0;
      //loop again through array
      for(let j=0; j<args.length; j++){
        //increase count is two values match
        if(args[j]==args[i]){
          count++;
        }
      }

      //check if calculated count is larger than the max reccurence
      if(recurrence<count){
        //if it is, save value and reccurence count
        value = args[i];
        recurrence = count;
      }
    }

    //console.log(value, recurrence);
    //don't forget to return your result
    return value;
  }
}

//make the function available to other units
module.exports = MostRecurrent;
