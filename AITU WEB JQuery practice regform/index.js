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

//$(document).on('click', '.toggle-password', function() {

//    $(this).toggleClass("fa-eye fa-eye-slash");

//    var input = $("#1password");
//    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
//});

//$("#showpaswd").click(function () {
//        var x = document.getElementById("1password");
//        if (x.type === "password") {
//            x.type = "text";
//        } else {
//            x.type = "password";
//        }
//    });

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

$("#fade").click(function(){
  $(this).fadeTo("slow", 0.1);
})

$( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "250px",
   height: "250px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",
    }, 1500 );
});
