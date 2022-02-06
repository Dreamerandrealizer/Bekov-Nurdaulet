function calculateBmi(){
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let bmi = (weight / ((height/100) * (height/100)));

  document.getElementById('output').innerHTML = bmi;

  if(bmi<18.5){
    document.getElementById('text').innerHTML = "Your BMI is " + bmi + ", so you are underweight."
  }
  else if (bmi>=18.5 && bmi<24.9) {
    document.getElementById('text').innerHTML = "Your BMI is " + bmi + ", so you are a normal weight."
  }
  else{
    document.getElementById('text').innerHTML = "Your BMI is " + bmi + ", so you are overweight."
  }
}
