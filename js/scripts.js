// Buisiness Logic



// User Interface Logic
$(document).ready(function () {
  $("form").submit(function(event) {
    var tax = $("#tax").val();
    var model = $("#model").val();
    var gold = $("#gold").val();

    if (tax === "tax-yes" && model === "model-no" && gold === "gold-no") {
      $("#ronaldo").hide();
      $("#messi").show();

    }
      else if (tax === "tax-no" && model === "model-yes" && gold === "gold-yes") {
      $("#messi").hide();
      $("#ronaldo").show();
      }
      else {
        $("#messi").hide();
        $("#ronaldo").show();
      }

    event.preventDefault();
  });

});

console.log("program complete");
