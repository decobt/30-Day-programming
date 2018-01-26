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
  this.tests = [
    [[1, 100],[1, 2, 3, 4, 5, 89, 99]],
    [[13, 4],[1, 2, 3, 3, 4]],
    [[6, 2],[1, 10, 6, 5]],
    [[5, 9],[1, 2, 6, 7]]
  ];
  this.results = ["99","not possible","1,5","2,6"];

  this.getResult = function(args){
    //define some variables
    var scale = args[0];
    var weights = args[1];
    //calculate the difference
    var diff = Math.abs(scale[0]-scale[1]);

    //check if one weight makes the diff
    for(let i=0; i< weights.length; i++){
      if(diff === weights[i]){
        return weights[i].toString();
      }
    }

    //check for two weights if they scale it
    for (let i = 0; i < weights.length - 1; i++) {
      for (let j = i + 1; j < weights.length; j++) {
        //check if their sum equals diff or their difference equals diff
        if( weights[i]+weights[j]===diff || Math.abs(weights[i]-weights[j])===diff){
          //check which is larger, in order to return them in asc order
          if(weights[i]<weights[j]){
            return weights[i] + ',' + weights[j];
          }else{
            return weights[j] + ',' + weights[i];
          }
        }
      }
    }

    //return not possible if nothing is met
    return "not possible";
  }
}

//make the function available to other units
module.exports = ScaleBalancing;
