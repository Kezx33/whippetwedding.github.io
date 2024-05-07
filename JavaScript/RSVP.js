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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


$(document).ready(function(){
  var $form = $('#nightForm');
  $form.submit(function(){
     $.post($(this).attr('action'), $(this).serialize(), function(response){
           // do something here on success
           $('#nightForm')[0].reset();
           $("#ThankYou").toggle();
           setTimeout(function(){location.reload(); },4000);
     },'json');
     return false;
  });
});


$(document).ready(function(){
  var $form = $('#dayForm');
  $form.submit(function(){
     $.post($(this).attr('action'), $(this).serialize(), function(response){
           // do something here on success
           $('#dayForm')[0].reset();
           $("#ThankYou").toggle();
           setTimeout(function(){location.reload(); },4000);
     },'json');
     return false;
  });
});


