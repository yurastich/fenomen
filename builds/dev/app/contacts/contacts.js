;(function(){

    "use strict";

    angular
        .module("fen.contacts", [
          "ngRoute"
        ])
        .controller("ContactsCtrl", ContactsController)
        .config(ContactsConfig)


      // @ngInject
      function ContactsController($scope) {
        $scope.Page = "contacts";
        var s = this;

        $scope.alerts = [];

        $scope.addAlert = function (_msg) {
          $scope.alerts.push({msg: _msg});
          setTimeout(function () {

          }, 2000)
        };

        $scope.closeAlert = function (index) {
          $scope.close=index;
          setTimeout(function () {
            $scope.alerts.splice(index, 1);
          },800);
        }


      }

       // @ngInject
      function ContactsConfig($routeProvider, $locationProvider) {
        $routeProvider
          .when("/contacts", {
            templateUrl: "app/contacts/contacts.html",
            controller: "ContactsCtrl"
          })
          .otherwise({ redirectTo: "/" });

        // $locationProvider.html5Mode(false).hashPrefix('');

      }

})();