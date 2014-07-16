$(document).ready(function(){
  $("#add-address").click(function() {
    $("#new-address").append('<div class ="new-address">' +
                              '<div class="form-group">' +
                              '<input type="text" placeholder="Street" class="street">' +
                              '</div>' +
                              '<div class="form-group">' +
                              '<input type="text" placeholder="City" class="city">' +
                              '</div>' +
                              '<div class ="form-group">' +
                              '<input type="text" placeholder="State" class="state">' +
                              '</div>');
  });

  $("#email-phone").click(function() {
    $("#phone-email").append('<div class="phone-email">' +
                            '<div class="form-group">' +
                            '<input type="text" placeholder="Phone Number" class ="phone">' +
                            '</div>' + '<div class="form-group">' +
                            '<input type="text" placeholder="Email Address" class="email">' +
                            '</div>'+ '</div>');
  });


  $('form#new-contact').submit(function(event){
    event.preventDefault();
      var inputFirstName = $('input.first-name').val();
      var inputLastName = $('input.last-name').val();

      var newContact = { firstName: inputFirstName, lastName: inputLastName, addresses: [], phone: [], email: [] };

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

  $('.phone-email').each(function() {
    var inputPhone = $(this).find("input.phone").val();
    var inputEmail = $(this).find("input.email").val();

    var phoneContact = { phone: inputPhone };
    var emailContact = { email: inputEmail };

    newContact.phone.push(phoneContact);
    newContact.email.push(emailContact);

    $(this).remove();
  });

  $("ul#contacts").append("<li><span class='contact'>"+ newContact.firstName + "</span></li>");

  $(".contact").last().click(function() {
      $("#show-contact").show();

      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);

      $("ul#addresses").text("");
      $("ul#phone").text("");
      $("ul#email").text("");
      newContact.phone.forEach(function(phones) {
        $("ul#phone").append("<li>" + phones.phone + "</li>");
      });
      newContact.email.forEach(function(emails) {
        $("ul#email").append("<li>" + emails.email +"</li>");
      });
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });

       });
    });
});
