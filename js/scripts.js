$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const faveAnimal = $("select#fave-animal").val();
    const schedule = $("select#schedule").val();
    const travel = $("select#travel").val();

    if (faveAnimal ==="lemur"){
      alert("LEMUR LOVER");
    } else {
      alert("WRONG UR WRONG");
    }
    
  });
});