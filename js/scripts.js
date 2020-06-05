$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const animal = $("select#animal").val();
    const schedule = $("select#schedule").val();
    const travel = $("select#travel").val();
    const hairColor = $("select#hair-color").val();
    const tvShow = $("select#tv-show").val();
    

    if (animal === "lemur" && schedule === "up-late" &&  travel != "paris" && hairColor === "blonde"){
      $("#output").text("You got Ruby!");
    } else if ((animal === "blob" && (schedule === "up-early" || schedule === "up-late") && travel === "rome") || (hairColor === "red")){ 
      $("#output").text("You got Python!");
    }else { $("#output").text("You got c#!");
    }


  });
});