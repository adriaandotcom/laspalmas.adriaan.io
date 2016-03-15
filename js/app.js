
var newsLetterForm = document.querySelector('form.newsletter');

if (newsLetterForm) {
  
  // Fake the amount of people, who cares?
  var amoundField = newsLetterForm.querySelector('.amount-of-people');
  
  var started = 1458081344871;
  var now = (new Date).getTime();
  var total = (now - started) / 1000 / 60 / 60 / 24 + 10;
  var amount = Math.round(total);
  
  amoundField.innerText = amount;

  newsLetterForm.addEventListener('submit', function(event) {
  
    // Don't do anything, browser!
    event.preventDefault();
    
    // Get email
    var email = newsLetterForm.querySelector('input[name="email"]')
    
    // Send newsletter email to myself
    var url = 'https://screenmessage.com/blog/mail.php?subject=New+subscription+for+Las+Palmas+blog&message=Email+address:+' + email.value;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    
    // Show response
    var responseField = newsLetterForm.querySelector('.response');
    responseField.style.display = 'block';
    
    // Increase the number of people responded
    amount = amount + 1;
    amoundField.innerText = amount;
    
    // Reset email field
    email.value = '';
  })
}

