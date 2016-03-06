$(document).ready(function() {
  // $("form#radio-form button").click(function(event){
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("form#userInput button").click(function(event) {

    var setting1 = $("select#setting1").val();
    var trees = $("input:radio[name=city]:checked").val();
    var trek = $("input:radio[name=trek]:checked").val();
    var culture = $("input:radio[name=culture]:checked").val();

if (setting1 === "nature" ||trees === "pine" || hiking === "yes")  {
  $("#gorge").show();
}else if (setting1 === "city" || hiking === "no" || museums === "oui") {
  $("#losangeles").show();
}else if (setting1 === "nature" && hiking === "yes" && setting2 === "desert" ) {
  $("#jtree").show();
};



event.preventDefault();
 });
});
