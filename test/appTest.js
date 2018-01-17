//get param from console, array
var args = process.argv.splice(2);

var filename = args[0];
var challenge = require('../src/'+ filename+'.js');

var app = new challenge();

//get test cases and expected result
var tests = app.tests;
var results = app.results;

//check each test case and compare results
for(let i=0; i<tests.length; i++){
  if (app.getResult(tests[i]) === results[i]){
    console.log(i+1 +'th case passed!');
  }else{
    console.log(i+1 +'th case NOT passed!');
  }
}
