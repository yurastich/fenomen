;(function () {

  "use strict";

  angular
    .module("fen", [
      "ui.router",
      "ui.bootstrap",
      "ngScrollbars",
      "fen.home",
      "fen.contacts",
      "fen.productsList",
      "fen.header",
      "fen.users",
      "firebase",
      "fen.database",
      "fen.registration"
    ])
    .controller("MainCtrl", MainController)
    .controller("SubCtrl", SubController)
    .run(MainRun)
    .config(MainScroll)
    .config(MainConfig)


  // @ngInject
  function SubController() {
    var s = this;


  }


  // @ngInject
  function MainController($rootScope, $scope) {

    var s = this;

    $("input").each(function () {
      var valNow = $(this).val(),
        par = $(this).closest(".b-input-container");
      if (valNow == "") {
        par.removeClass("m-full");
      } else {
        par.addClass("m-full");
      }
    });

    $("input").blur(function () {
      var valNow = $(this).val(),
        par = $(this).closest(".b-input-container");
      if (valNow == "") {
        par.removeClass("m-full");
      } else {
        par.addClass("m-full");
      }

    });

  }

  // @ngInject
  function MainRun($rootScope, $state, $stateParams, fire) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromStat, fromParams) {
        console.log(fire.isLogin());
        // console.log(toState.authenticate);
        if(toState.authenticate && !fire.isLogin()){
          $state.transitionTo("singin")
          event.preventDefault();
        }else if (!toState.authenticate && fire.isLogin()) {
          $rootScope.isLogin = true;
          //$state.transitionTo('home');
          //event.preventDefault();
        } else if (!toState.authenticate && !fire.isLogin()) {
          //$state.transitionTo('home');
          //event.preventDefault();
        }
      });
  }

  // @ngInject
  function MainScroll(ScrollBarsProvider) {
    ScrollBarsProvider.defaults = {
      scrollButtons: {
        scrollAmount: 'auto', // scroll amount when button pressed
        enable: true // enable scrolling buttons by default
      },
      axis: 'y' // enable 2 axis scrollbars by default
    };
  }

  // @ngInject
  function MainConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');
  }

})();