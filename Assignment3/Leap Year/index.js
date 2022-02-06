var leapYear = prompt("Enter the year:");
if ((leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0 )){
 console.log("Leap year.");
}
else{
console.log("Not Leap year.");
}
