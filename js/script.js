(function ($) {
  $(".accordion-question").click(function () {
    if ($(this).next(".accordion-answer").hasClass("open")) {
      $(this).removeClass("active");
      $(this).next(".accordion-answer").removeClass("open").slideUp();
      $(this).children(".arrow").removeClass("reversed-arrow");
    } else {
      $(".accordion-question").removeClass("active");
      $(".accordion-answer").removeClass("open").slideUp();
      $(".arrow").removeClass("reversed-arrow");
      $(this).addClass("active");
      $(this).next(".accordion-answer").addClass("open").slideDown();
      $(this).children(".arrow").addClass("reversed-arrow");
    }
  });
})(jQuery);
