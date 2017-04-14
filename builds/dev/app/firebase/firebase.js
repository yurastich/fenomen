;(function () {

  "use strict";

  angular
    .module("fen.database", [
      "firebase"
    ])
    .factory("fire", fireFactory)

  // @ngInject
  function fireFactory($firebaseAuth) {
    var o = {},
      users = null,
      ref = firebase.database().ref(),
      refUser = ref.child("users"),
      auth = firebase.auth();

    o.getRef = function () {
      return ref;
    };

    o.get$Auth = function () {
      return auth;
    };

    o.getAuth = function () {
      return ref.getAuth();
    };

    o.isLogin = function () {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          return true
        } else {
          return false
        }
      });
    };


    return o;
  }

})();
