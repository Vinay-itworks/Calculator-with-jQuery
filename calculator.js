var solution = ""
var history = ""
$(document).ready(function(){
  $("td").click(function(){
    object = $(this)[0];
    if (object.innerHTML == "="){
      try {
        var answer = eval(solution)
        if (answer % 1 != 0){answer = answer.toFixed(2)}
        $("#solution")[0].innerHTML = answer;
        $("#history")[0].innerHTML += $("#operation")[0].innerHTML + 
          " = " + answer + 
          "<br/>";
      }
      catch(err) {
        console.log(err.message);
        $("#solution")[0].innerHTML = "Give proper values";
      }
      
    } else if (object.innerHTML == "C"){
      $("#operation")[0].innerHTML = "";
      solution = "";
      $("#solution")[0].innerHTML = 0;
    } else{
      
      if (object.className == "operator"){
        $("#operation")[0].innerHTML += "&nbsp;" + this.innerText + "&nbsp;"
      } else {
        $("#operation")[0].innerHTML += this.innerText;
      }
      console.log(this.className);
      solution += this.id;
      console.log(solution);
    } 
  });
});


// Slide
$(document).ready(function(){
  $("#slider").click(function(){
    if ($("#history")[0].style.display == "none"){
      $("history").slideDown();
    } else if ($("#history")[0].style.display == "block"){
      $("history").slideUp();
   }
    
    $("#history").slideToggle(500);
  });
});
