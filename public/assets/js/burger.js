// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");


    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".clearBurger").on("click", function(event){
        var id = $(this).data("id");

      $.ajax("/api/burger/" + id, {
        type: "DELETE",
      }).then(
        function(){
        console.log("deleted burger ", + id)
          location.reload();
      }
    );

});

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured : 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});
