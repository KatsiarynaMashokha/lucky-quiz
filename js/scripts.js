$(document).ready(function() {
  $("form#fortune").submit(function(event){
    event.preventDefault();
    var happy = [];
    var unhappy = [];
    var resText;

    $("#luckyResponses").show();
    $("input:checkbox[name=luckyEvent]:checked").each(function(){
      var luckyEvents = $(this).val();
      happy.push(luckyEvents);
      $("#luckyResponses").append(luckyEvents + "<br>");
    });
    $("#unluckyResponses").show();
    $("input:checkbox[name=unluckyEvent]:checked").each(function(){
      var unluckyEvents = $(this).val();
      unhappy.push(unluckyEvents);

      $("#unluckyResponses").append(unluckyEvents + "<br>");
    });

    if (happy.length > unhappy.length) {
      resText = "You are a lucky person this month!"
    }
    else {
      resText = "You will be luckier next month)!"
    }
    $("#result").text(resText);
  });
});
