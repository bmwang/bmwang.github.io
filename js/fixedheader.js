// Fixed header 

// Only do things if we're not on a mobile device
var platform = navigator.platform.toLowerCase();
var mobile = platform.match(/(iphone|ipod|ipad|android)/);
if (!mobile) {
  $(document).ready(function() {
    var header = $('.page-header');
    // Clone the header and reassign its class.
    var fixedHeader = header.clone();
    fixedHeader.removeClass('page-header')
      .addClass('fixed-page-header')
      .insertAfter(header);

    var targetPos = 200;

    $(document).scroll(function() {
      var scrollPos = $(document).scrollTop();
      if (scrollPos < targetPos) {
        var progress = (scrollPos)/targetPos;
        // negatives look scary
        if (progress < 0) {
          progress = 0;
        }
        // Simple cubic ease
        var progress = progress * (progress - 0.3) ;
        fixedHeader.css({opacity: progress});
      } else {
        fixedHeader.css({opacity: 1});
      }
    });
  });
}
