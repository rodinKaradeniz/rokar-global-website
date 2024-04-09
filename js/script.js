$(document).ready(function () {
  // Function to update background based on current slide
  function updateBackground() {
    var currentItem = $(".owl-item.active").find(".service");
    var bgImg = currentItem.attr("data-bg");
    $(".services").css("background-image", bgImg);
  }

  $(window).on("scroll", function () {
    if (isElementInView(".owl-carousel")) {
      updateBackground();
      // Optional: Unbind scroll event if not needed anymore
      $(window).off("scroll");
    }
  });

  // Ensure background is set for the first item on load as well
  $(document).ready(function () {
    setTimeout(updateBackground, 100); // Delay to ensure carousel is initialized
  });

  function typeEffect(element, delay) {
    const text = $(element).text();
    $(element).html("");

    let i = 0;
    let timer = setInterval(function () {
      if (i < text.length) {
        $(element).append(`<span>${text[i]}</span>`);
        i++;
      } else {
        clearInterval(timer);
        // $(element).addClass("typing"); // Add cursor effect after typing
      }
    }, delay);

    // setTimeout(function () {
    //   $(element).removeClass("typing");
    // }, 4000); // milliseconds
  }

  // Apply the typing effect
  typeEffect(".hero-div h1", 80); // Adjust delay as needed for h1
  typeEffect(".hero-div h2", 50); // Adjust delay as needed for h2

  // Function to check if element is in viewport
  function isElementInView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Check for elements to animate on scroll
  $(window).on("scroll", function () {
    $(".to-animate").each(function () {
      if (isElementInView(this)) {
        $(this).addClass("animated");
      }
    });
  });

  // Initial check in case the element is already in view on page load
  $(window).scroll();

  changeNavbar();

  // Function to scroll to a section
  function scrollToSection(sectionID) {
    var target = $(sectionID);
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 32,
      },
      1500,
      "easeInOutCubic"
    );
  }

  // Scroll to section when clicked
  $(".navbar-nav a, .btn-white, .btn-trans, .brand-and-toggler a").on(
    "click",
    function (e) {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Get the target section ID from the href attribute
      var targetID = $(this).attr("href");

      // Scroll to the target section
      scrollToSection(targetID);

      // Close navbar menu if open
      if ($(".navbar-collapse").is(":visible")) {
        $(".navbar-collapse").slideToggle(400);
      }
    }
  );

  $("#navbar-toggler").click(function () {
    // Before toggling, check if navbar-collapse is currently visible
    if ($(".navbar-collapse").is(":visible")) {
      // If closing and scrollTop < 100, remove the class; otherwise, keep it
      $(".navbar-collapse").slideToggle(400, function () {
        if ($(window).scrollTop() < 100) {
          $(".navbar").removeClass("cng-navbar");
        }
      });
    } else {
      // If opening, add the class immediately
      $(".navbar").addClass("cng-navbar");
      $(".navbar-collapse").slideToggle(400);
    }
  });

  function changeNavbar() {
    let pos = $(window).scrollTop();
    let screenWidth = $(window).width();
    if (
      pos >= 100 ||
      ($(".navbar-collapse").is(":visible") && screenWidth <= 992)
    ) {
      $(".navbar").addClass("cng-navbar");
    } else {
      $(".navbar").removeClass("cng-navbar");
    }
  }

  // Change navbar background on scroll
  $(window).scroll(function () {
    changeNavbar();
  });

  $(window).resize(function () {
    changeNavbar();
  });

  // Initialize Owl Carousel
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 30000,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    slideTransition: `linear`,
  });

  // Listen for the 'changed' event and update the background image
  owl.on("changed.owl.carousel", function (event) {
    var currentItem = $(event.target)
      .find(".owl-item")
      .eq(event.item.index)
      .find(".service");
    var bgImg = currentItem.attr("data-bg");
    $(".services").css("background-image", bgImg);
  });

  // FAQ accordion with smooth animation
  $(".faq-head").click(function () {
    var $faqContent = $(this).next(".faq-content");

    // Toggle icon class
    var $icon = $(this).find("i");
    $icon.toggleClass("fa-plus fa-minus");

    // Directly proceed if already expanded, to collapse it
    if ($faqContent.hasClass("show-faq-content")) {
      $faqContent.height($faqContent.height());
      $faqContent.removeClass("show-faq-content");
      $faqContent.height(0);
    } else {
      // Prepare for a smooth height transition
      var prevHeight = $faqContent.height(); // Capture current height
      $faqContent.css({ height: "auto" }); // Set height to auto to get the target height
      var autoHeight = $faqContent.height(); // Get the natural height

      $faqContent.height(prevHeight); // Revert to previous height
      $faqContent.addClass("show-faq-content"); // Add class (for potential styling)
      $faqContent.height(autoHeight); // Animate to auto height
    }
  });

  // Listen to transition end to reset height to auto for responsiveness
  $(".faq-content").on("transitionend", function () {
    if ($(this).hasClass("show-faq-content")) {
      $(this).height("auto");
    }
  });

  // Clear form after submission
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
});
