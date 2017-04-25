;(function () {

  "use strict";

  angular
    .module("fen.profile", [
      "fen.users"
    ])
    .controller("ProfileCtrl", progileController)
    .config(ProfileConfig)

  // @ngInject
  function progileController(users, $stateParams) {
    var s = this;


  }
  
  // @ngInject
  function ProfileConfig($stateProvider) {
    $stateProvider.state("profile",{
      url: "/profile/:uid",
      templateUrl: "app/profile/profile.html",
      controller: "ProfileCtrl",
      controllerAs: "prc",
      authenticate: true
    })
  }


})();