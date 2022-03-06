$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
