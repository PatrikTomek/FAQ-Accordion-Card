(function ($) {
  $(".accordion-question").click(function () {
    if ($(this).next(".accordion-answer").hasClass("open")) {

        $(this).removeClass('active')
      $(this).next(".accordion-answer").removeClass("open").slideUp();

    } else {
         $('.accordion-question').removeClass('active');
      $(".accordion-answer").removeClass("open").slideUp();
      $(this).addClass("active");
      $(this).next(".accordion-answer").addClass("open").slideDown();

    }
  });
})(jQuery);
