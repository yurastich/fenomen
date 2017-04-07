;(function () {

  "use strict";

  angular
    .module("fen", [
      "ngRoute",
      "ui.bootstrap",
      "ngScrollbars",
      "fen.home",
      "fen.contacts",
      "fen.productsList",
      "fen.header",
      "fen.users",
      "firebase",
      "fen.dbc"
    ])
    // .constant("FURL", {
    //   apiKey: "AIzaSyAB-iQDdPv1Wte-LnieplX0HQjaSm9vVYE",
    //   authDomain: "fenomen-75cfc.firebaseapp.com",
    //   databaseURL: "https://fenomen-75cfc.firebaseio.com",
    //   projectId: "fenomen-75cfc",
    //   storageBucket: "fenomen-75cfc.appspot.com",
    //   messagingSenderId: "231623679199"
    // })
    .controller("MainCtrl", MainController)
    .controller("SubCtrl", SubController)
    .run(MainRun)
    .config(MainScroll)


  // @ngInject
  function SubController() {
    var s = this;

    s.sub = {
      hello: "Привет мир qwe"
    }
  }


  // @ngInject
  function MainController($rootScope, $scope) {

    var s = this;

    s.main = {
      hello: "Привет мир"
    };
    s.valuables = ["We are the best", "We are awesome"];


  }

  // @ngInject
  function MainRun($rootScope) {


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

})();