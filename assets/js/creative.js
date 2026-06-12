/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        window.scrollTo({
          top: target.offset().top - 72,
          behavior: 'smooth'
        });
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Solidify the fixed header after scrolling
  var headerScroll = function() {
    if ($(window).scrollTop() > 24) {
      $("#header").addClass("is-scrolled");
    } else {
      $("#header").removeClass("is-scrolled");
    }
  };
  headerScroll();
  $(window).scroll(headerScroll);

  // Reveal sections as they enter the viewport
  var revealElements = document.querySelectorAll('.reveal');
  var showReveal = function(element) {
    element.classList.add('is-visible');
  };
  var isRevealInView = function(element) {
    var rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
  };

  if (!revealElements.length) {
    // No reveal targets on this page.
  } else if (!('IntersectionObserver' in window)) {
    revealElements.forEach(showReveal);
  } else {
    var revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
          return;
        }
        showReveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    revealElements.forEach(function(element) {
      if (isRevealInView(element)) {
        showReveal(element);
        return;
      }
      revealObserver.observe(element);
    });
  }

})(jQuery); // End of use strict
