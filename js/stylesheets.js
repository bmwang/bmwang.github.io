// Add a CSS stylesheet switcher.
// A bit messy, but whatever.

// Grab the cookie if the visitor has set one
var color = 'light';
if(document.cookie) {
  // If there is a cookie, swap out the css before the document loads
  var cookieColor = color;
  var name = 'color=';
  var cookieElems = document.cookie.split(';');
  for(var i=0; i<cookieElems.length; i++) {
    var cookieDef = cookieElems[i].trim();
    if (cookieDef.indexOf('color=') == 0) {
      cookieColor = cookieDef.substring(name.length, cookieDef.length);
    }
  }

  // Check if this is a valid color
  var validColors = {light: 1, dark: 1};
  if (cookieColor in validColors) {
    color = cookieColor;
    $('#style').attr('href', '/css/'+color+'.css');
  } else {
    document.cookie = ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
}

// Defer everything else to after the document loads
$(document).ready(function() {
  // Function to swap stylesheets
  function swapColor(color) {
    $('body').fadeOut(500, 'linear', function() {
        $('#style').attr('href', '/css/'+color+'.css');
        var date = new Date();
        var days = 30;
        date.setTime(date.getTime()+(days*24*60*60*1000));
        document.cookie = 'color='+color+'; path=/; expires='+date.toGMTString();
        $('.switch-css').toggle();
        $(this).fadeIn(500, 'linear');
    } );
  };

  // Add controls into the header
  $('<div/>', {
      class: 'switch-css',
      id: 'switch-dark',
      text: '(Lights Off)'
    })
    .click(function() {
      swapColor('dark');
    }).appendTo('header.page-header');

  $('<div/>', {
      class: 'switch-css',
      id: 'switch-light',
      text: '(Lights On)'
    })
    .click(function() {
      swapColor('light');
    }).appendTo('header.page-header');

  // Hide the current theme selector
  $('#switch-'+color).hide();
});
