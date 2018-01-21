/*
* TimeConvert Function
* Have the function TimeConvert(num) take the num parameter being passed and
* return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
* Separate the number of hours and minutes with a colon.
*/
function TimeConvert(){
  //define test cases
  this.tests = [120, 40, 368, 4, 100];
  this.results = ["2:0", "0:40", "6:8", "0:4", "1:40"];

  this.getResult = function(args){
    //get hours and minutes
    var hours = Math.floor( args/60 );
    var minutes = args % 60;

    //don't forget to return your result in format h:mm
    return hours+":"+minutes;
  }
}

//make the function available to other units
module.exports = TimeConvert;
