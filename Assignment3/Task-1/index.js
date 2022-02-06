var yourName = prompt("What is your name?");
var countName = yourName.length;
var upper = yourName.slice(0, 1);
var lower = yourName.slice(1, countName + 1);
var uCase = upper.toUpperCase();
var lCase =  lower.toLowerCase();
alert("Hello " + uCase + lCase + "!");
