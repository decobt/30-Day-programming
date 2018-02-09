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
  this.tests = [
    "^v^^v^^vv^vv^vv^^vvv^^v^^^vv^^^vv^v^^vvv^^^^^v^v^v^v^vv^^vvv^^^^vvv^^vvv^^^^^vvvv^^vvv^vv^^vv^vv^v^^^",
    "^vv^v^^vvv^^^^^v^v^v^v^vv^^vvv^^^^vvv^^vvv^^^^^vvvv^^v",
    "^^^^^^vvv^^vv^vvv^vvv^^vvvvv^^^^^",
    "^^^^^vv^^"
    ];
  this.results = [3,2,1,5];
  
  this.getResult = function(args){
    //define floor variable, set to 0 floor
    var floor = 0;
    for(let i=0; i<args.length; i++){
      if(args[i]==='^'){
        //increase floor
        floor= floor+1;
      }else{
        //decrease floor
        floor= floor-1;
      }
    }

    //don't forget to return your result
    return floor;
  }
}

//make the function available to other units
module.exports = Elevator;
