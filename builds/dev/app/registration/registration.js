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
      registration.signup(s.singupUser);
    };

    s.signInGoogle = function () {
      registration.singInGoogle().then(function () {
        console.log("Sing In With Google");
      });
    }


  }

  // @ngInject
  function RegistrationFactory(fire, $rootScope, users, $firebaseObject) {
    var o = {};
    var auth = firebase.auth();


    $rootScope.logout = function () {
      console.log('logout');
      fire.logout();
    };

    auth.onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        users.getUser(firebaseUser.uid).then(function (_user) {
          _user.$watch(function () {
            $rootScope.currentUser = {
              uid: firebaseUser.uid,
              loggedIn: true,
              fullname: _user.name + " " + _user.surname
            };
          });
        });
      } else {
        $rootScope.currentUser = {
          uid: null,
          loggedIn: false,
          fullname: null
        };
      }
    });

    o.singin = function (_user) {
      return auth.signInWithEmailAndPassword(_user.email, _user.password)
    };

    o.signup = function (_user) {
      return auth.createUserWithEmailAndPassword(_user.email, _user.password)
        .then(function (userData) {
          var userRef = fire.getRef().child("users").child(userData.uid);
          userRef.set({
            name: _user.name,
            surname: _user.surname,
            registered: firebase.database.ServerValue.TIMESTAMP,
            last_visit: firebase.database.ServerValue.TIMESTAMP
          });

          return auth.signInWithEmailAndPassword(_user.email, _user.password)
        });
    };

    o.singInGoogle = function () {
      var provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope('https://www.googleapis.com/auth/plus.login');

      return auth.signInWithPopup(provider).then(function (authData) {
        console.log("AuthData: ", authData);
        var userRef = fire.getRef().child("users").child(authData.user.uid);
        var userObj = $firebaseObject(userRef);
        // console.log("userRef: ", userRef);
        // console.log("userObj: ", userObj);
        userObj.$loaded(function(_d){
          console.log("user object: ", _d);
          if(_d.registered) {
            userObj.last_visit = firebase.database.ServerValue.TIMESTAMP;
          }else{
            userObj.last_visit = firebase.database.ServerValue.TIMESTAMP;
            userObj.registered = userObj.registered ? userObj.registered : firebase.database.ServerValue.TIMESTAMP;
            userObj.name = authData.user.displayName || "";
            userObj.surname = "";
            userObj.google_id = authData.user.uid;
          }
          userObj.$save();
          console.log("userObj: ", userObj)
        })

      }).catch(function (error) {
        console.log("Error: ", error);
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