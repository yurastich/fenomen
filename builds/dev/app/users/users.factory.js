;(function(){

  "use strict";

  angular
    .module("fen.users")
    .factory("users", UsersFactory)



  // @ngInject
  function UsersFactory($q, $http, dbc, $firebaseArray, $firebaseObject) {
    var o = {};
    var users = null;
    var ref = firebase.database().ref();


    // o.getUsers = function () {
    //
    //   console.log($firebaseObject(ref));
    //
    //   return true
    //
    // };

    return o

  }

})();