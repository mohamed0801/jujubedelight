(function ($) {
  "use strict";
  //change active
  function updateActiveLink() {
    var navbarLinks = document.querySelectorAll("#navbar a");
    var scrollPosition = window.scrollY;

    // Parcourir tous les liens de la navbar
    navbarLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href");
      var section = document.querySelector(sectionId);

      // Vérifier si la section est visible à l'écran
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        // Ajouter la classe "active" au lien correspondant
        link.classList.add("active");
      } else {
        // Supprimer la classe "active" des autres liens
        link.classList.remove("active");
      }
    });
  }

  // Écouter l'événement de défilement de la fenêtre
  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("DOMContentLoaded", updateActiveLink);
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(".fixed-top").css("top", $(".top-bar").height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".fixed-top").addClass("bg-dark").css("top", 0);
    } else {
      $(".fixed-top").removeClass("bg-dark").css("top", $(".top-bar").height());
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
