$(document).ready(function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  var $links = $(".haircuts__wrap a");
  var $button = $(".js-more");

  $links.slice(9).hide();

  $button.click(function (e) {
    e.preventDefault();
    $links.show();
    $(this).hide();
  });

  function closeMenu() {
    $(".js-open-menu").removeClass("active");
    $("body").removeClass("b-hidden");
    $(".mobile-menu").removeClass("active");
  }

  $(".js-anchor").click(function (e) {
    e.preventDefault();
    closeMenu();
    const headerHeight = $(".header").height();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - headerHeight - 20,
      },
      800
    );
  });

  $(".js-open-menu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("html, body").animate({ scrollTop: 0 }, "fast");
    $("body").toggleClass("b-hidden");
    $(".mobile-menu").toggleClass("active");
  });

  $(".contacts__form").submit(function (event) {
    event.preventDefault();

    $(".contacts__wrap").removeClass("error");
    $(".contacts__error").hide();

    let isValid = true;

    const name = $("#name").val().trim();
    if (name.length < 2) {
      isValid = false;
      $("#name").closest(".contacts__wrap").addClass("error");
      $(".js-error-name").show();
    }

    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      $("#email").closest(".contacts__wrap").addClass("error");
      $(".js-error-email").show();
    }

    const city = $("#city").val();
    if (!city) {
      isValid = false;
      $("#city").closest(".contacts__wrap").addClass("error");
      $(".js-error-city").show();
    }

    if (isValid) {
      var form = $(this);
      var formData = form.serialize()
      var baseurl = 'https://happycurls.as.me/'
      var redirectUrl = baseurl + city + '?' + formData
      window.location.href = redirectUrl
    }
  });

  
  $(".faq__item").on("click", function () {
    $(this).find(".faq__answer").slideToggle(300);
    $(this).toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $("header").addClass("white");
    } else {
      $("header").removeClass("white");
    }
  });
});
