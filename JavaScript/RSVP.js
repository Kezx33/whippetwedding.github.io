$(document).ready(function() {
  $("#dayButton").click(function() {
    $("#dayForm").toggle();
    $("#nightForm").hide();
  });
  $("#nightButton").click(function() {
    $("#nightForm").toggle();
    $("#dayForm").hide();
  });
});


