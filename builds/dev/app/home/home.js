;(function(){

    "use strict";

  angular
    .module("fen.home", [])
    .controller("HomeCtrl", HomeController)
    .config(HomeConfig)



  // @ngInject
  function HomeController($rootScope) {
    $rootScope.Page = "home";

    var s = this;

    s.title = "Home Page";
    s.name = "LoftSchool";
    s.valuables = ["We are the best", "We are awesome"];

    s.addValuable = function (_newVal) {
      s.valuables.push(_newVal)
    };

      var swiper = new Swiper('.b-first', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 3000,
        effect: "fade",
        loop: true,
        autoplay: 1
      });


  }

  // @ngInject
  function HomeConfig ($stateProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl",
        authenticate: false
      });
    // $locationProvider.hashPrefix('');
  }

})();

