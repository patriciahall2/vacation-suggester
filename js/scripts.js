$(document).ready(function() {
  var hotWeather = confirm("Do you like hot, dry weather? Click OK for yes or Cancel for no.");
  if (hotWeather) {
    $('#hot').show();
  } else {
    $('#hot').hide();
  }
});
var
