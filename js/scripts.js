$(document).ready(function() {
  // $("form#radio-form button").click(function(event){
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("form#userInput button").click(function(event) {

    var setting1 = $("select#setting1").val();
    var trees = $("select#trees").val();
    var hiking = $("select#hiking").val();
    var setting2 = $("select#setting2").val();
    var museums = $("select#museums").val();

    if ((setting1 === "nature") && (trees === "pine") && (hiking === "yes"))  {
       $("#gorge").show();
      } else if ((setting1 === "city") && (hiking === "no") && (museums === "oui")) {
       $("#losangeles").show();
      } else if ((setting1 === "nature") && (trees === "palm") && (setting2 === "lush")) {
       $("#hawaii").show();
     } else {
       $("#jtree").show();  

    };




event.preventDefault();
});
});
