// let num =prompt("Enter a number:");

// if (num%5===0){
//     console.log(num,"is a multiple of 5");
// }
// else {
//     console.log(num,"is not a multiple of 5");
// }
// let score = 5;

// if (score>=90 && score<=100) {
//     console.log("Grade = A")
// }
// else if(score>=70&& score<=89) {
//     console.log("Grade = B");
// }
// else if(score>=60&&score<=69) {
//     console.log("Grade = C");
// }
// else if(score>=50&&score<=59) {
//     console.log("Grade = D");
// }
// else {
//     console.log("Grade = F");
// }

// Loop

// for (let i = 1; i <= 10; i++) {
//     console.log("Sakshi");
// }
// console.log("Hello");

// const John = require("./second");

// console.log("Hello", John)

// let http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// const Sakshi = require("./second");

// console.log(Sakshi);
// cd "C:\Users\DELL\OneDrive\Documents\js files\classroom"
// node first.js


function calculateBMI(){
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if(weight=="" || height==""){
    alert("Please enter all values");
    return;
  }

  height = height/100; // cm to meter

  let bmi = weight / (height*height);
  bmi = bmi.toFixed(2);

  let result = document.getElementById("result");

  if(bmi < 18.5){
    result.innerHTML = `Your BMI is ${bmi} (Underweight)`;
  }
  else if(bmi >= 18.5 && bmi < 25){
    result.innerHTML = `Your BMI is ${bmi} (Normal)`;
  }
  else if(bmi >= 25 && bmi < 30){
    result.innerHTML = `Your BMI is ${bmi} (Overweight)`;
  }
  else{
    result.innerHTML = `Your BMI is ${bmi} (Obese)`;
  }
}
