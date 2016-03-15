document.querySelector('form.newsletter').addEventListener('submit', function(event) {

  // Don't do anything, browser!
  event.preventDefault();
  
  // Get email
  var email = document.querySelector('form.newsletter input[name="email"]').value
  
  // Send newsletter email to myself
  var url = 'http://watiseropderadio.nl/tools/mail?subject=New+subscriber+Las+Palmas+blog:+' + email;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.send();
})

