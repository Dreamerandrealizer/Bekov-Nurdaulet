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
  var name;
  var name = document.getElementById("fname").value;
  name.focus();
  if(a != " " && b != " " && name != " "){
    alert("Congrats you have been successfully registered!!!");
    return false;
  }
}


$(document).ready(function(){
  const password = $('#1password');
  $('#eye').click(function(){
    if(password.prop('type') == 'password'){
      $(this).addClass('fa-eye-slash');
      password.attr('type','text')
    }
    else{
      $(this).removeClass('fa-eye-slash');
      password.attr('type','password');
    }
  })
})

$(document).ready(function(){
  const password = $('#2password');
  $('#eye2').click(function(){
    if(password.prop('type') == 'password'){
      $(this).addClass('fa-eye-slash');
      password.attr('type','text')
    }
    else{
      $(this).removeClass('fa-eye-slash');
      password.attr('type','password');
    }
  })
})

$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});

function playForSub() {
  var audio = new Audio('imgs/rocksound.m4a');
  audio.play();
}
