$(document).ready(function() {
  // $("form#radio-form button").click(function(event){
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("form#userInput button").click(function(event) {

    var setting1 = $("select#setting1").val();
    var trees = $("select#trees").val();
    var trek = $("select#hiking").val();
    var climate = $("select#setting2").val();
    var art = $("select#museums").val();


if (setting1 === "nature" && trees === "pine")  {
  $("#gorge").show();
} else if (setting1 === "city" || hiking === "no" || museums === "oui") {
  $("#losangeles").show();
} else {
  $("#hawaii").show();
};



event.preventDefault();
});
});
