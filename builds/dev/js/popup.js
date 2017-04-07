$(document).ready(function () {

  // Popup
  var popup = function () {
    var popup = $(".b-popup-overlay");

    $("[data-button]").click(function () {
      var popupNum = $(this).data("button");
      $("[data-modal='" + popupNum + "']").addClass("active").animate({
        "opacity": 1
      }, 300);
      overlayOpen();
    });


    $("[data-button]").click(function (e) {
      e.preventDefault();
    });

    $(".b-close").click(function () {
      $(".b-popup-overlay").animate({
        "opacity": 0
      }, 300);
      setTimeout(function () {
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    });

    $(".b-overlay").click(function () {
      $(".b-popup-overlay").animate({
        "opacity": 0
      }, 300);
      setTimeout(function () {
        $(".b-popup-overlay.active").removeClass("active");
      }, 310);
      overlayClose();
    })
  };
  // Popup end
  var scrollTopPopup = function () {
    scr = $(window).scrollTop();
    scrWrap = $(".wrap").scrollTop();
  };

  // Overlay
  var overlayOpen = function () {
    scrollTopPopup();
    $(".b-overlay").addClass("active");
    $(".wrap").addClass("m-wrap-popup");
    $(".wrap").scrollTop(scr);
    $(".m-close-glob").addClass("m-close-visible");
    $(".b-overlay").animate({
      "opacity": "1"
    }, 300);
  };

  var overlayClose = function () {
    scrollTopPopup();
    $(".b-overlay").animate({
      "opacity": "0"
    }, 300);
    setTimeout(function () {
      $(".b-overlay").removeClass("active");
      $(".wrap").removeClass("m-wrap-popup");
      $(window).scrollTop(scrWrap);
      $(".m-close-glob").removeClass("m-close-visible");
    }, 310);
  };
  // Overlay end

  // Popup end

  popup();

  $(window).resize(function () {

    popup();

  });


});