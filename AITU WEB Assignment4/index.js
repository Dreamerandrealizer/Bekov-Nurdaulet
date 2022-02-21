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

$("a[href='top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#charleft').text(textlen);
});


function playForSub() {
  var audio = new Audio('imgs/jssound.m4a');
  audio.play();
}


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("click").innerHTML = "Here is your promo code: DWDW456IOS";
}

var person1 = {firstName:"Andrew", lastName:"Garfield", age:30, eyeColor:"blue"};
var person2 = {firstName:"Ryan", lastName:"Reynolds", age:30, eyeColor:"blue", fullName: function(){
  return this.firstName + " " + this.lastName;
}};

document.getElementById("jso1").innerHTML = person1.firstName + person1.lastName;
document.getElementById("jso2").innerHTML = person2.fullName();
