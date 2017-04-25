;(function () {

  "use strict";

  MainController.$inject = ["$rootScope", "$scope"];
  MainRun.$inject = ["$rootScope", "$state", "$stateParams", "fire"];
  MainScroll.$inject = ["ScrollBarsProvider"];
  MainConfig.$inject = ["$urlRouterProvider", "$locationProvider"];
  angular
    .module("fen", [
      "ui.router",
      "ui.bootstrap",
      "ngScrollbars",
      "fen.home",
      "fen.contacts",
      "fen.productsList",
      "fen.header",
      "fen.users",
      "firebase",
      "fen.database",
      "fen.registration",
      "fen.profile"
    ])
    .controller("MainCtrl", MainController)
    .controller("SubCtrl", SubController)
    .run(MainRun)
    .config(MainScroll)
    .config(MainConfig)


  // @ngInject
  function SubController() {
    var s = this;


  }


  // @ngInject
  function MainController($rootScope, $scope) {

    var s = this;

    $("input").each(function () {
      var valNow = $(this).val(),
        par = $(this).closest(".b-input-container");
      if (valNow == "") {
        par.removeClass("m-full");
      } else {
        par.addClass("m-full");
      }
    });

    $("input").blur(function () {
      var valNow = $(this).val(),
        par = $(this).closest(".b-input-container");
      if (valNow == "") {
        par.removeClass("m-full");
      } else {
        par.addClass("m-full");
      }

    });

  }

  // @ngInject
  function MainRun($rootScope, $state, $stateParams, fire) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromStat, fromParams) {
        fire.get$Auth().onAuthStateChanged(function (firebaseUser) {
          if(!firebaseUser && toState.authenticate){
            $state.transitionTo('singin');
          }else{
            // console.log("можно зайти");
          }
        });

        // if(toState.authenticate && !fire.loggedIn()){
        //   $state.transitionTo("singin")
        //   event.preventDefault();
        // }else if (!toState.authenticate && fire.loggedIn()) {
        //   $rootScope.loggedIn = true;
        //   //$state.transitionTo('home');
        //   //event.preventDefault();
        // } else if (!toState.authenticate && !fire.isLogin()) {
        //   //$state.transitionTo('home');
        //   //event.preventDefault();
        // }
      });
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

  // @ngInject
  function MainConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');
  }

})();
;(function(){

    "use strict";

      ContactsController.$inject = ["$scope"];
      ContactsConfig.$inject = ["$stateProvider"];
    angular
        .module("fen.contacts", [])
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
      function ContactsConfig($stateProvider) {
        $stateProvider
          .state("contacts", {
            url: "/contacts",
            templateUrl: "app/contacts/contacts.html",
            controller: "ContactsCtrl",
            authenticate: false
          });
      }

})();
;(function () {

  "use strict";

  fireFactory.$inject = ["$firebaseAuth"];
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

angular
    .module("fen.header", [])
    .controller("headerCtrl", headerController)



  // @ngInject
  function headerController() {
    var s = this;



  }
  

;(function(){

    "use strict";

  HomeController.$inject = ["$rootScope"];
  HomeConfig.$inject = ["$stateProvider"];
  angular
    .module("fen.home", [])
    .controller("HomeCtrl", HomeController)
    .config(HomeConfig)



  // @ngInject
  function HomeController($rootScope) {
    $rootScope.Page = "home";

    var s = this;

    s.title = "Home Page";
    s.name = "LoftSchool";
    s.valuables = ["We are the best", "We are awesome"];

    s.addValuable = function (_newVal) {
      s.valuables.push(_newVal)
    };

      var swiper = new Swiper('.b-first', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 3000,
        effect: "fade",
        loop: true,
        autoplay: 1
      });


  }

  // @ngInject
  function HomeConfig ($stateProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl",
        authenticate: false
      });
    // $locationProvider.hashPrefix('');
  }

})();


;(function(){

  "use strict";

  ProductsListController.$inject = ["$rootScope"];
  ProductsListConfig.$inject = ["$stateProvider"];
  angular
    .module("fen.productsList", [])
    .controller("ProductsListCtrl", ProductsListController)
    .config(ProductsListConfig)


  // @ngInject
  function ProductsListController($rootScope) {

    $rootScope.Page = "products-list";
    var s = this;

    // $(".b-global-container, .b-scroll").mCustomScrollbar();

    var jsonProductsDate = [
      {
        "_id": "58cd1ab743ad4a0886245c65",
        "index": 0,
        "picture": "http://placehold.it/300x300",
        "cost": 803,
        "name": {
          "name": "Elnora",
          "theme": "Woods"
        }
      },
      {
        "_id": "58cd1ab71795930a2c47b43a",
        "index": 1,
        "picture": "http://placehold.it/300x300",
        "cost": 825,
        "name": {
          "name": "Molly",
          "theme": "Lopez"
        }
      },
      {
        "_id": "58cd1ab79c02b4165e511e6b",
        "index": 2,
        "picture": "http://placehold.it/300x300",
        "cost": 826,
        "name": {
          "name": "Franklin",
          "theme": "Knapp"
        }
      },
      {
        "_id": "58cd1ab7f4ed282b92e92d77",
        "index": 3,
        "picture": "http://placehold.it/300x300",
        "cost": 747,
        "name": {
          "name": "Kasey",
          "theme": "Hooper"
        }
      },
      {
        "_id": "58cd1ab7722549698960d21a",
        "index": 4,
        "picture": "http://placehold.it/300x300",
        "cost": 746,
        "name": {
          "name": "Marina",
          "theme": "Daniel"
        }
      },
      {
        "_id": "58cd1ab7a43bc6b1c1f44ac3",
        "index": 5,
        "picture": "http://placehold.it/300x300",
        "cost": 640,
        "name": {
          "name": "Banks",
          "theme": "Travis"
        }
      },
      {
        "_id": "58cd1ab7c363dad1a8e3dc1e",
        "index": 6,
        "picture": "http://placehold.it/300x300",
        "cost": 573,
        "name": {
          "name": "Church",
          "theme": "Alexander"
        }
      },
      {
        "_id": "58cd1ab71dc4564ad83baaa2",
        "index": 7,
        "picture": "http://placehold.it/300x300",
        "cost": 508,
        "name": {
          "name": "Gwendolyn",
          "theme": "Terrell"
        }
      },
      {
        "_id": "58cd1ab74499429c60f0d399",
        "index": 8,
        "picture": "http://placehold.it/300x300",
        "cost": 681,
        "name": {
          "name": "Eve",
          "theme": "Whitney"
        }
      },
      {
        "_id": "58cd1ab7f8d8d8b9fcbe255c",
        "index": 9,
        "picture": "http://placehold.it/300x300",
        "cost": 563,
        "name": {
          "name": "Kristie",
          "theme": "Guy"
        }
      },
      {
        "_id": "58cd1ab7b1016e4dfb233add",
        "index": 10,
        "picture": "http://placehold.it/300x300",
        "cost": 580,
        "name": {
          "name": "Vanessa",
          "theme": "Jimenez"
        }
      },
      {
        "_id": "58cd1ab7e35e979afd984238",
        "index": 11,
        "picture": "http://placehold.it/300x300",
        "cost": 694,
        "name": {
          "name": "Cindy",
          "theme": "Strong"
        }
      },
      {
        "_id": "58cd1ab7a858813f36b569c7",
        "index": 12,
        "picture": "http://placehold.it/300x300",
        "cost": 655,
        "name": {
          "name": "Morton",
          "theme": "Sutton"
        }
      },
      {
        "_id": "58cd1ab7d9a22dd4503ee142",
        "index": 13,
        "picture": "http://placehold.it/300x300",
        "cost": 844,
        "name": {
          "name": "Parsons",
          "theme": "Bolton"
        }
      },
      {
        "_id": "58cd1ab7d36c119b525825d0",
        "index": 14,
        "picture": "http://placehold.it/300x300",
        "cost": 770,
        "name": {
          "name": "Mccarty",
          "theme": "Mercado"
        }
      },
      {
        "_id": "58cd1ab7741a67061c4e1df3",
        "index": 15,
        "picture": "http://placehold.it/300x300",
        "cost": 710,
        "name": {
          "name": "Luz",
          "theme": "Waters"
        }
      },
      {
        "_id": "58cd1ab738fd65dda98fd894",
        "index": 16,
        "picture": "http://placehold.it/300x300",
        "cost": 846,
        "name": {
          "name": "Mclean",
          "theme": "Hill"
        }
      },
      {
        "_id": "58cd1ab70a2d874d1cc71498",
        "index": 17,
        "picture": "http://placehold.it/300x300",
        "cost": 888,
        "name": {
          "name": "Joy",
          "theme": "Ward"
        }
      },
      {
        "_id": "58cd1ab76a753bb764f47403",
        "index": 18,
        "picture": "http://placehold.it/300x300",
        "cost": 726,
        "name": {
          "name": "Conner",
          "theme": "Rodriguez"
        }
      },
      {
        "_id": "58cd1ab73c36b604d5a39741",
        "index": 19,
        "picture": "http://placehold.it/300x300",
        "cost": 783,
        "name": {
          "name": "Dionne",
          "theme": "Hall"
        }
      },
      {
        "_id": "58cd1ab7c26407f8907dd30c",
        "index": 20,
        "picture": "http://placehold.it/300x300",
        "cost": 772,
        "name": {
          "name": "Baker",
          "theme": "Schneider"
        }
      },
      {
        "_id": "58cd1ab79c8814e4e3c4343d",
        "index": 21,
        "picture": "http://placehold.it/300x300",
        "cost": 720,
        "name": {
          "name": "Jannie",
          "theme": "Mcdowell"
        }
      },
      {
        "_id": "58cd1ab7b9014a130fee4173",
        "index": 22,
        "picture": "http://placehold.it/300x300",
        "cost": 877,
        "name": {
          "name": "Mccall",
          "theme": "Blackburn"
        }
      },
      {
        "_id": "58cd1ab72a2af3e0687c61b1",
        "index": 23,
        "picture": "http://placehold.it/300x300",
        "cost": 580,
        "name": {
          "name": "Meghan",
          "theme": "Shannon"
        }
      },
      {
        "_id": "58cd1ab75023c24a2836c40e",
        "index": 24,
        "picture": "http://placehold.it/300x300",
        "cost": 694,
        "name": {
          "name": "Ayala",
          "theme": "Bridges"
        }
      },
      {
        "_id": "58cd1ab731741e30c26d6f54",
        "index": 25,
        "picture": "http://placehold.it/300x300",
        "cost": 510,
        "name": {
          "name": "Angel",
          "theme": "Guerra"
        }
      },
      {
        "_id": "58cd1ab701d1ed494c877960",
        "index": 26,
        "picture": "http://placehold.it/300x300",
        "cost": 685,
        "name": {
          "name": "Briggs",
          "theme": "Long"
        }
      },
      {
        "_id": "58cd1ab7de9c65d548d3e954",
        "index": 27,
        "picture": "http://placehold.it/300x300",
        "cost": 689,
        "name": {
          "name": "Greer",
          "theme": "Gray"
        }
      },
      {
        "_id": "58cd1ab77bae95647e6d6275",
        "index": 28,
        "picture": "http://placehold.it/300x300",
        "cost": 842,
        "name": {
          "name": "Brenda",
          "theme": "Berry"
        }
      }
    ]

    s.productsList = jsonProductsDate;

    s.productOnes = "lalala"

  }

  // @ngInject
  function ProductsListConfig($stateProvider) {
    $stateProvider
      .state("products-list", {
        url: "/products-list",
        templateUrl: "app/products-list/products-list.html",
        controller: "ProductsListCtrl",
        controllerAs: "plc",
        authenticate: false
      })
  }

})();

;(function () {

  "use strict";

  progileController.$inject = ["users", "$stateParams"];
  ProfileConfig.$inject = ["$stateProvider"];
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
;(function () {

  "use strict";

  RegistrationController.$inject = ["registration", "$rootScope"];
  RegistrationFactory.$inject = ["fire", "$rootScope", "users", "$firebaseObject"];
  RegistrationConfig.$inject = ["$stateProvider"];
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
;(function () {

  "use strict";

  dbcConfig.$inject = ["$stateProvider"];
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
;(function(){

  "use strict";

  UsersControllerFunction.$inject = ["$scope", "users", "$stateParams"];
  angular
    .module("fen.users")
    .controller("UsersCtrl", UsersControllerFunction)



  // @ngInject
  function UsersControllerFunction ($scope, users, $stateParams) {

    var s = this;

    s.users = [];

    console.log("$stateParams.authenticate ",$stateParams.authenticate)

    users.getUsers().then(function (_data) {
      s.users = _data;
    });

    $scope.addUser = function () {
      $scope.users.$add({
        email: $scope.newUserEmail,
        password: $scope.newUserPassword,
        name: $scope.newUserName,
        surname: $scope.newUserSurname
      });
    };


    s.editUser = function (_user) {
      s.editFormShow = true;
      s.editingUser = {
        id:_user.$id,
        name:_user.name,
        surname: _user.surname
      }

    };


    s.cancelEditUser = function () {
      s.editFormShow = false;
      s.editingUser = {
        id:null,
        name:null,
        surname: null
      }
    };
    
    s.saveUser = function () {
      users.saveUser(s.editingUser).then(function ( ) {
        s.cancelEditUser();
      })
    };

    s.removeUser = function () {
      users.removeUser(s.editingUser.id).then(function () {
        s.cancelEditUser();
      });
    };

    s.createUser = function () {
      s.editFormShow = true;
      users.createBlankUser().then(function (_d) {
        s.editUser(_d);
      })
    };


    s.cancelEditUser();

  }

})();
;(function(){

  "use strict";

  UsersFactory.$inject = ["$q", "$http", "$firebaseArray", "$firebaseObject"];
  angular
    .module("fen.users")
    .factory("users", UsersFactory)



  // @ngInject
  function UsersFactory($q, $http, $firebaseArray, $firebaseObject) {
    var o = {};
    var users = null;
    var ref = firebase.database().ref();
    var refUsers = ref.child("users");


    o.getUsers = function () {
      return $firebaseArray(refUsers).$loaded(function (_d) {
        return _d;
      });
    };

    o.getUser = function (_id) {
      return $firebaseObject(refUsers.child(_id)).$loaded();
    };

    o.saveUser = function (_user) {
      var user = $firebaseObject(refUsers.child(_user.id));
      return user.$loaded(function (_dbuser) {
        _dbuser.name = _user.name;
        _dbuser.surname = _user.surname;
        return _dbuser.$save();
      })
    };

    o.removeUser = function (_id) {
      return $firebaseObject(refUsers.child(_id)).$remove();
    };

    o.createBlankUser = function () {
      return $firebaseArray(refUsers).$add({
        name:"",
        surname:"",
        registered: firebase.database.ServerValue.TIMESTAMP,
        last_visit: firebase.database.ServerValue.TIMESTAMP
      }).then(function (_ref) {
        return $firebaseObject(_ref).$loaded();
      })
    };

    return o
  }

})();