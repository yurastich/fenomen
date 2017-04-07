;(function () {

  "use strict";

  MainController.$inject = ["$rootScope", "$scope"];
  MainRun.$inject = ["$rootScope"];
  MainScroll.$inject = ["ScrollBarsProvider"];
  angular
    .module("fen", [
      "ngRoute",
      "ui.bootstrap",
      "ngScrollbars",
      "fen.home",
      "fen.contacts",
      "fen.productsList",
      "fen.header",
      "fen.users",
      "firebase",
      "fen.dbc"
    ])
    // .constant("FURL", {
    //   apiKey: "AIzaSyAB-iQDdPv1Wte-LnieplX0HQjaSm9vVYE",
    //   authDomain: "fenomen-75cfc.firebaseapp.com",
    //   databaseURL: "https://fenomen-75cfc.firebaseio.com",
    //   projectId: "fenomen-75cfc",
    //   storageBucket: "fenomen-75cfc.appspot.com",
    //   messagingSenderId: "231623679199"
    // })
    .controller("MainCtrl", MainController)
    .controller("SubCtrl", SubController)
    .run(MainRun)
    .config(MainScroll)


  // @ngInject
  function SubController() {
    var s = this;

    s.sub = {
      hello: "Привет мир qwe"
    }
  }


  // @ngInject
  function MainController($rootScope, $scope) {

    var s = this;

    s.main = {
      hello: "Привет мир"
    };
    s.valuables = ["We are the best", "We are awesome"];


  }

  // @ngInject
  function MainRun($rootScope) {


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

})();
;(function(){

    "use strict";

      ContactsController.$inject = ["$scope"];
      ContactsConfig.$inject = ["$routeProvider", "$locationProvider"];
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
;(function(){

    "use strict";

      dbcFactory.$inject = ["$scope"];
      DbcController.$inject = ["$scope"];
    angular
        .module("fen.dbc", [
          "firebase",
        ])
        .factory("dbc", dbcFactory)
        .controller("DbcCtrl", DbcController)


      // @ngInject
      function dbcFactory ($scope) {
        // var o = {};
        // var ref = firebase.initializeApp(FURL);
        // o.getRef = function () {
        //
        //   return ref;
        // };
        //
        // return o;
      }
      // @ngInject
      function DbcController ($scope) {
        // var ref = firebase.database().ref();
        // // download the data into a local object
        // $scope.data = $firebaseObject(ref);
        // var syncObject = $firebaseObject(ref);
        // // synchronize the object with a three-way data binding
        // // click on `index.html` above to see it used in the DOM!
        // syncObject.$bindTo($scope, "data");
        // console.log($scope.data)
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
  HomeConfig.$inject = ["$routeProvider"];
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
  function HomeConfig ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"
      })
      .otherwise({ redirectTo: "/" })
  }

})();


;(function(){

  "use strict";

  ProductsListController.$inject = ["$rootScope"];
  ProductsListConfig.$inject = ["$routeProvider", "$locationProvider"];
  angular
    .module("fen.productsList", [
      "ngRoute"
    ])
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
  function ProductsListConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when("/products-list", {
        templateUrl: "app/products-list/products-list.html",
        controller: "ProductsListCtrl",
        controllerAs: "plc"
      })
      .otherwise({ redirectTo: "/" });

    // $locationProvider.html5Mode(false).hashPrefix('');

  }

})();

;(function(){

    "use strict";

    dbcConfig.$inject = ["$routeProvider", "$locationProvider"];
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
;(function(){

  "use strict";

  UsersControllerFunction.$inject = ["$rootScope", "firebase"];
  angular
    .module("fen.users")
    .controller("UsersCtrl", UsersControllerFunction)



  // @ngInject
  function UsersControllerFunction ($rootScope, firebase) {
    // $rootScope.Page = "users";
    // var s = this;
    //
    // s.users = [];
    //
    // users.getUsers().then(function (_data) {
    //   s.users = _data
    // })
    var ref = firebase.database().ref();
    // download the data into a local object
    $rootScope.data = $firebaseObject(ref);
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($rootScope, "data");
    console.log($rootScope.data);
    console.log("lalala");

  }

})();
;(function(){

  "use strict";

  UsersFactory.$inject = ["$q", "$http", "dbc", "$firebaseArray", "$firebaseObject"];
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