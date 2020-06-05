$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const faveAnimal = $("select#fave-animal").val();
    const schedule = $("select#schedule").val();
    const travel = $("select#travel").val();
  
    if (faveAnimal === "lemur" && schedule === "up-late" && travel != "paris"){
      alert("Ruby");
    } else if (faveAnimal === "blob" && (schedule === "up-early" || schedule === "up-late") && travel === "rome"){ 
      alert("Python");
    }else { alert("C#");
    }


  });
});