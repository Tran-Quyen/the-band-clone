// Case 1
/*
  data-interval="1500"
  data-ride="true"
  data-pause="false"
  $('.carousel').carousel()
*/

// Case 2
$('.carousel').carousel({
  interval: 1500,
  ride: true,
  pause: false,
});

// Link: filter: hue-rotate(180deg);
var copyright = document.querySelector('.footer-copyright > a');
var corner = 0;
setInterval(() => {
  copyright.style.filter = `hue-rotate(${corner}deg)`;
  corner += 20;
}, 500);

// Sroll smooth
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (e) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        e.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });


