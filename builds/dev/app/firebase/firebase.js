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
      auth = firebase.auth(),
      google = new firebase.auth.GoogleAuthProvider();

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
      return auth.onAuthStateChanged(function (firebaseUser) {
      });
    };

    o.getUid = function(){
      return uid;
    };

    o.logout = function(){
      auth.signOut();
    };


    return o;
  }

})();
