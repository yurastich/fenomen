;(function () {

  "use strict";

  angular
    .module("fen.registration", [])
    .controller("RegistrationCtrl", RegistrationController)
    .factory("registration", RegistrationFactory)
    .config(RegistrationConfig)


  // @ngInject
  function RegistrationController(registration, $rootScope) {
    var s = this;

    $rootScope.Page = "registration";

    s.singinUser = {
      email: null,
      password: null
    };

    s.singin = function () {
      registration.singin(s.singinUser)
    };

    s.signupUser = {
      email: null,
      password: null,
      name: null,
      surname: null
    };

    s.signup = function () {
      registration.singup(s.singupUser);
    };


  }

  // @ngInject
  function RegistrationFactory(fire, $rootScope, users) {
    var o = {};
    // var auth = firebase.auth();
    var auth = fire.get$Auth();

    $rootScope.logout = function () {
      auth.signOut();
    };

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("singing");
        console.log("All info: ", user);
        console.log("Detail: ", user.providerData[0]);
        users.getUser(user.uid).then(function (_user) {
          $rootScope.currentUser = {
            loggedIn: true,
            fullname: _user.name + " "+ _user.surname
          }
        });

      }else{
        console.log("sing out");
        $rootScope.currentUser = {
          loggedIn: false,
          fullname: null
        }
      }
    });

    o.singin = function (_user) {
      console.log(_user)
      return auth.signInWithEmailAndPassword(_user.email, _user.password)
    };

    o.singup = function (_user) {
      return auth.createUserWithEmailAndPassword(_user.email, _user.password)
        .then(function (userData) {
          var userRef = fire.getRef().child("users").child(userData.uid);
          userRef.set({
            name: _user.name,
            surname: _user.surname,
            registered: firebase.database.ServerValue.TIMESTAMP,
            last_visit: firebase.database.ServerValue.TIMESTAMP
          });

          // return auth.signInWithEmailAndPassword(_user.email, _user.password)
        });
    };

    return o;
  }


  // @ngInject
  function RegistrationConfig($stateProvider) {

    $stateProvider
      .state("singin", {
        url: "/singin",
        templateUrl: "app/registration/singin.html",
        controller: "RegistrationCtrl",
        controllerAs: "rc",
        authenticate: false
      })
      .state("singup", {
        url: "/singup",
        templateUrl: "app/registration/singup.html",
        controller: "RegistrationCtrl",
        controllerAs: "rc",
        authenticate: false
      })

  }

})();