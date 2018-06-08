var btn = $('.js-cross');
var menuBtn = $('.menu-mobile-cross');
var menu = $('.navbar-collapse');

btn.click(function() {
  if (!menuBtn.hasClass('is-open')) {
    menuBtn.addClass('is-open');
 		menu.addClass('is-open');
  } else {
    menuBtn.removeClass('is-open');
 		menu.removeClass('is-open');
  }
   	
});
