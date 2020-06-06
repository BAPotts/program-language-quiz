$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const animal = $("input:radio[name=animal]:checked").val();
    const schedule = $("input:radio[name=schedule]:checked").val();
    const travel = $("input:radio[name=travel]:checked").val();
    const hairColor = $("input:radio[name=hair-color]:checked").val();
    const tvShow = $("input:radio[name=tv-show]:checked").val();
    

    if (animal === "lemur" && schedule === "up-late" &&  travel != "paris" && hairColor === "blonde"){
      $("#result").show();
      $("#python").hide();
      $("#c").hide();
      $("#ruby").show();
    }else if ((animal === "blob" && (schedule === "up-early" || schedule === "up-late") && travel === "rome") || (hairColor === "red")){ 
      $("#result").show();
      $("#c").hide();
      $("#ruby").hide();
      $("#python").show();
    }else {
      $("#result").show();
      $("#python").hide();
      $("#ruby").hide();
      $("#c").show();
    }


  });
});