  $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      //console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();

  });
  $('.nav-item').click(function () {
      //console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
      $('.navTrigger').toggleClass('active');

  });
  $(body).scroll(function() {
          if ($(body).scrollTop() > 50) {
              $('.nav').addClass('affix');
              console.log("OK");
          } else {
              $('.nav').removeClass('affix');
          }
  });
