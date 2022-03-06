$("a[href='top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

let texttt = document.getElementById('texttt');
texttt.onmouseover=function(){
  texttt.innerHTML='SNEAKER SHOP '
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
