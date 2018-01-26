/*
* ScaleBalancing Function
* Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the
* two positive integer weights on a balance scale (left and right sides) and the second element
* being a list of available weights as positive integers. Your goal is to determine if you can balance the scale
* by using the least amount of weights from the list, but using at most only 2 weights.
* For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale
* with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale
* by adding a 6 to the left side from the list of weights and adding a 2 to the right side.
* Both scales will now equal 11 and they are perfectly balanced. Your program should return
* a common separated string of the weights that were used from the list in ascending order,
* so for this example your program should return the string 2,6 
*/
function ScaleBalancing(){
  //define test cases
  this.tests = [1,2,3,4];
  this.results = [1,2,3,4];

  this.getResult = function(args){
    //add your code here

    //don't forget to return your result
    return args;
  }
}

//make the function available to other units
module.exports = ScaleBalancing;
