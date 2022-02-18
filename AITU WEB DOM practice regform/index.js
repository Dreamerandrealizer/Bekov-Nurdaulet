function checkPassword(){
  var a = document.getElementById("1password").value;
  var b = document.getElementById("2password").value;
  if(a != b){
    document.getElementById("mess").innerHTML="Passwords do not match";
    return false;
  }

  let form = document.getElementById('form');
  var a = document.getElementById("1password").value;
  var b = document.getElementById("2password").value;
  var c = document.getElementById("fname").value;
  if(a != " " && b != " " && c != " "){
    alert("Congrats you have been successfully registered!!!");
    return false;
  }
}
