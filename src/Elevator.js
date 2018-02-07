/*
* Elevator Function
* An elevator is given an input code which it then uses to go up or down floors:
* "^" = go up one floor
* "v" (lower-case v) = go down one floor
* The elevator starts on floor 0.
* Question
* Which floor will "^v^^v^^vv^vv^vv^^vvv^^v^^^vv^^^vv^v^^vvv^^^^^v^v^v^v^vv^^vvv^^^^vvv^^vvv^^^^^vvvv^^vvv^vv^^vv^vv^v^^^" end up?
*/
function Elevator(){
  this.tests = [1,2,3,4];
  this.results = [1,2,3,4];
  this.getResult = function(args){
    //add your code here

    //don't forget to return your result
    return args;
  }
}

//make the function available to other units
module.exports = Elevator;
