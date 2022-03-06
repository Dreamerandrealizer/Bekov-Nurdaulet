var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#charleft').text(textlen);
});

function blurEve(){
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function blurEve2(){
  var x = document.getElementById("lname");
  x.value = x.value.toUpperCase();
}

function myFunction(x) {
  x.style.background = "#C8C7C7";
}
function myFunction(x) {
  x.style.background = "#C8C7C7";
}
function myFunction(x) {
  x.style.background = "#C8C7C7";
}
