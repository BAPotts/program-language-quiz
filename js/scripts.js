$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const animal = $("select#animal").val();
    const schedule = $("select#schedule").val();
    const travel = $("select#travel").val();
    const hairColor = $("select#hair-color").val();
    const tvShow = $("select#tv-show").val();
    

    if (animal === "lemur" && schedule === "up-late" &&  travel != "paris" && hairColor === "blonde"){
      $(".result").show();
      $("#python").hide();
      $("#c").hide();
      $("#ruby").show();
    }else if ((animal === "blob" && (schedule === "up-early" || schedule === "up-late") && travel === "rome") || (hairColor === "red")){ 
      $(".result").show();
      $("#c").hide();
      $("#ruby").hide();
      $("#python").show();
    }else {
      $(".result").show();
      $("#python").hide();
      $("#ruby").hide();
      $("#c").show();
    }


  });
});