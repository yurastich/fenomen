;(function () {

  "use strict";

  angular
    .module("fen.users", [
      "firebase"
    ])
    .config(dbcConfig)

  // @ngInject
  function dbcConfig($stateProvider) {
    $stateProvider
      .state("users", {
        url: "/users",
        templateUrl: "app/users/users.html",
        controller: "UsersCtrl",
        controllerAs: "us",
        authenticate: false
      })
      .state("users.page1", {
        url: "/page1",
        templateUrl: "app/users/pages/users.page1.html",
        authenticate: true
      })
      .state("users.page2", {
        url: "/page2",
        templateUrl: "app/users/pages/users.page2.html",
        authenticate: true
      })
      .state("users.page3", {
        url: "/page3",
        templateUrl: "app/users/pages/users.page3.html",
        authenticate: true
      })
  }

})();