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

