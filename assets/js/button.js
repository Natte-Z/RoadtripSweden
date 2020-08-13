// Adding scroll up button function

var btn = $('#bButton');
// function for showing thebuttin

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
// Adding what the function should do once the button is clicked

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});