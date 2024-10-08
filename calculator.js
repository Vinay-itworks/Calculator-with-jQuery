var solution = ""
var history = ""
$(document).ready(function(){
  $("#slider").click(function(){
    $("#history").slideToggle();
  });

  $("td").hover(function(){
      this.style.boxShadow = "5px 5px 5px black, 0 0 5px black, 0 0 5px black";
    },
    function(){
      this.style.boxShadow = "";
    }
  );
  $("td").click(function(){
    object = $(this);
    if (object.html() == "="){
    	console.log("Enter with "+ solution);
      try {
      	
        var answer = eval(solution);
        if (answer % 1 != 0){answer = answer.toFixed(2)}
        console.log(answer);
        $("#solution").html(answer);
        $("#history").html($("#history").html() + $("#operation")[0].innerHTML + 
          " = " + answer + "<br/>");
      }
      catch(err) {
        console.log(err.message);
        $("#solution").html("Give proper values");
      }
      
    } else if (object.html() == "C"){
      $("#operation").html("");
      solution = "";
      $("#solution").html(0);
    } else{
      
      if (object.hasClass("operator")){
        $("#operation").html($("#operation").html() + "&nbsp;" + this.innerText + "&nbsp;")
      } else {
        $("#operation").html($("#operation").html() + this.innerText)
      }
      console.log(this.className);
      solution += this.id;
      console.log(solution);
    } 
  });
});

