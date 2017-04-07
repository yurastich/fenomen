;(function(){

    "use strict";

    angular
      .module("fen.users", [
        "firebase"
      ])
      .config(dbcConfig)

    // @ngInject
    function dbcConfig ($routeProvider, $locationProvider) {
        $routeProvider
          .when("/users", {
              templateUrl: "app/users/users.html",
              controller: "UsersCtrl",
              controllerAs: "uc"
          })
          .otherwise({ redirectTo: "/" });
      $locationProvider.html5Mode(false).hashPrefix('');

    }

})();