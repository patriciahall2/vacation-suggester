$(document).ready(function() {
  $("#hawaii, #jtree, #gorge, #losangeles").hide();
  $("#userInput").submit(function(event) {
  $("#hawaii, #jtree, #gorge, #losangeles").hide();

  var nature = $("input:radio[name=nature]:checked" ).val();
  var city = $("input:radio[name=city]:checked").val();
  var trek = $("input:radio[name=trek]:checked").val();
  var culture = $("input:radio[name=culture]:checked").val();



event.preventDefault();
 });
});
