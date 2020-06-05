$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const animal = $("select#animal").val();
    const schedule = $("select#schedule").val();
    const travel = $("select#travel").val();
    const hairColor = $("select#hair-color").val();
    const tvShow = $("select#tv-show").val();

    if (animal === "lemur" && schedule === "up-late" && travel != "paris" && hairColor === "blonde"){
      alert("Ruby");
    } else if ((animal === "blob" && (schedule === "up-early" || schedule === "up-late") && travel === "rome") || (hairColor === "red")){ 
      alert("Python");
    }else { alert("C#");
    }


  });
});