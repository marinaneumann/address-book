$(document).ready(function(){
  $("#add-address").click(function() {
    $("#new-address").append('<div class ="new-address">' +
                              '<div class="form-group">' +
                              '<input type="text" placeholder="Street" class="street">' +
                              '<p></p>' + '</div>' +
                              '<div class="form-group">' +
                              '<input type="text" placeholder="City" class="city">' +
                              '<p></p>' + '</div>' +
                              '<div class ="form-group">' +
                              '<input type="text" placeholder="State" class="state">' +
                              '<p></p>' + '</div>');
  });

  $('form#new-contact').submit(function(event){
    event.preventDefault();
      var inputFirstName = $('input.first-name').val();
      var inputLastName = $('input.last-name').val();

      var newContact = { firstName: inputFirstName, lastName: inputLastName, addresses: [] };

      $("input.first-name").val("");
      $("input.last-name").val("");

  $('.new-address').each(function() {
      var inputCity = $(this).find("input.city").val();
      var inputStreet = $(this).find("input.street").val();
      var inputState = $(this).find("input.state").val();

      var newAddress = { city: inputCity, street: inputStreet, state: inputState };

      newContact.addresses.push(newAddress);

      $(this).remove();

    });

  $("ul#contacts").append("<li><span class='contact'>"+ newContact.firstName + "</span></li>");

  $(".contact").last().click(function() {
      $("#show-contact").show();

      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);

      $("ul#addresses").text("");
      console.log(newContact.addresses.length)
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });


  });

  // $('input#first-name').val("");
  // $('input#last-name').val("");
  // $('input#street').val("");
  // $('input#city').val("");
  // $('input#state').val("");
  });
});
