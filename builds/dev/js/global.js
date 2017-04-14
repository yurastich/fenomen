function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("/js/popup.js");


$(document).ready(function () {

    var galleryTop = new Swiper('.b-photo-list-container', {
        nextButton: '.js-arrow-right',
        prevButton: '.js-arrow-left',
        effect: "fade",
        spaceBetween: 10,
        keyboardControl: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });

    // $(".fancybox").fancybox({
    //     openEffect: "elastic",
    //     closeEffect: "elastic",
    //     nextEffect: "elastic",
    //     prevEffect: "elastic",
    // });

    var num = 0;

    var detailNum = function () {
        var men = $(".js-men-num"),
          stock = $(".js-stock-num"),
          stockText = (stock.text()) * 1;

        function Random() {
            num = Math.floor((Math.random() * (stockText + 20)) + 1);

            return num
        }

        function Scl() {
            Random();
            if (num > stockText) {
                men.text(num);
            } else {
                Scl();
            }
        }

        Scl();

    };

    // $('.e-zoom-img').magnify({
    //     speed: 200,
    // });

    // $(".e-sf-item-s").click(function () {
    //     var par = $(this).closest(".b-sf-list"),
    //       items = par.find(".e-sf-item"),
    //       item = $(this).closest(".e-sf-item"),
    //       detail = item.find(".e-sf-item-f"),
    //       details = par.find(".e-sf-item-f"),
    //       actHave = item.hasClass("active");
    //
    //     if(actHave){
    //         detail.slideUp();
    //         item.removeClass("active");
    //     }else{
    //         items.removeClass("active");
    //         details.slideUp();
    //         item.addClass("active");
    //         detail.slideDown();
    //     }
    //
    // });


    detailNum();



    $(window).resize(function () {


    });


    $(window).scroll(function () {
        var scr = $(window).scrollTop(),
          screenHeight = $(window).height(),
          screenWidth = $(window).width();
        // scroll();
    });
})






